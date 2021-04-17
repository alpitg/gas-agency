import { Component, OnInit } from '@angular/core';

import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { InventoryService } from 'projects/gas-agency/src/app/data/service/inventory.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {


  items: MenuItem[];
  cities: any[] = [];
  selectedCity: any;

  activeItem: MenuItem;
  itemWeights: any[] = [];



  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.initializeVariables();

    const category = this.getLpgCategoryMaster();
    forkJoin([category]).subscribe(response => {
      this.itemWeights = response[0] ? response[0].filter(x => x.lpgType === 'commercial') : [];
    });
  }

  initializeVariables() {
    this.items = [
      { label: 'Domestic', icon: 'pi pi-fw pi-home' },
      { label: 'Commercial', icon: 'pi pi-fw pi-calendar', badge: '9' },
    ];

    this.activeItem = this.items[0];

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  getLpgCategoryMaster() {
    return this.inventoryService.getLpgCategoryMaster();
  }

}
