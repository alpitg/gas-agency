import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './page/inventory/inventory.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ChipsModule } from 'primeng/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { InventoryStatusComponent } from './page/inventory-status/inventory-status.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { UpdateInventoryComponent } from './page/update-inventory/update-inventory.component';
import { ChartModule } from 'primeng/chart';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [InventoryComponent, InventoryStatusComponent, UpdateInventoryComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //primeng
    TabMenuModule,
    ChipsModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    DropdownModule,
    TableModule,
    ChartModule,
    BreadcrumbModule,

    //chart
    NgxEchartsModule
  ]
})
export class InventoryModule { }
