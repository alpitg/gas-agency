import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'projects/gas-agency/src/app/data/service/inventory.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-inventory-status',
  templateUrl: './inventory-status.component.html',
  styleUrls: ['./inventory-status.component.scss']
})
export class InventoryStatusComponent implements OnInit {

  options = {
    title: {
      text: 'Nightingale\'s Rose Diagram',
      subtext: 'Mocking Data',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' }
        ]
      }
    ]
  };

  currentStockList: any;
  data: any;
  dataLineChart: any;
  dataBarChart: any;


  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {

    const currentStock = this.inventoryService.getCurrentStock();
    forkJoin([currentStock]).subscribe(response => {
      this.setCurrentStockData(response[0]);
    });


    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };


      this.dataLineChart = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#4bc0c0'
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#565656'
            }
        ]
    };

    this.dataBarChart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }
  }

  setCurrentStockData(data: any[]) {
    const result = data.reduce((p, c) => {
      p[c.category] = p[c.category] || [];
      p[c.category].push(c);
      return p;
      // }, []);
    }, Object.create(null));



    console.log(result);
    this.currentStockList = result;
  }




  // function groupByKey(array, key) {
  //   return array
  //     .reduce((hash, obj) => {
  //       if(obj[key] === undefined) return hash;
  //       return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
  //     }, {})
  // }


  // var cars = [{'make':'audi','model':'r8','year':'2012'},{'make':'audi','model':'rs5','year':'2013'},{'make':'ford','model':'mustang','year':'2012'},{'make':'ford','model':'fusion','year':'2015'},{'make':'kia','model':'optima','year':'2012'}];

  // console.log(groupByKey(cars, 'make'))
}

