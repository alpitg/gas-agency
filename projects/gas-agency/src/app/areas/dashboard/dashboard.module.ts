import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { SidebarComponent } from './page/sidebar/sidebar.component';


@NgModule({
  declarations: [DashboardComponent, SidebarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    SharedModule
  ]
})
export class DashboardModule { }
