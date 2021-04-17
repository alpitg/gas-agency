import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'inventory',
    loadChildren: () => import('../inventory/inventory.module').then(x => x.InventoryModule)
  },
  {
    path: 'hr',
    loadChildren: () => import('../hr/hr.module').then(x => x.HrModule)
  },




  // {
  //   path: 'projects/:id',
  //   component: ProjectDetailsComponent,
  //   resolve: {
  //     project: ProjectResolver
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
