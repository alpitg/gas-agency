import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { InventoryService } from 'projects/gas-agency/src/app/data/service/inventory.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.scss']
})
export class UpdateInventoryComponent implements OnInit {

  cities: any[] = [];
  selectedCity: any;
  itemWeights: any[] = [];
  values: string[];
  items: MenuItem[];


  constructor(private inventoryService: InventoryService) { }


  ngOnInit(): void {

    this.items = [
      {label:'Inventory', url: '/'},
      {label:'Update'}
  ];

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];


    const category = this.getLpgCategoryMaster();
    forkJoin([category]).subscribe(response => {
      this.itemWeights = response[0] ? response[0].filter(x => x.category === 'commercial') : [];
    });
  }





  getLpgCategoryMaster() {
    return this.inventoryService.getLpgCategoryMaster();
  }
}
