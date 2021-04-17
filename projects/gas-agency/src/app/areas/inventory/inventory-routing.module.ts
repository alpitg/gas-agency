import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryStatusComponent } from './page/inventory-status/inventory-status.component';
import { InventoryComponent } from './page/inventory/inventory.component';
import { UpdateInventoryComponent } from './page/update-inventory/update-inventory.component';

const routes: Routes = [
  { path: '', component: InventoryComponent },
  { path: 'inventory-status', component: InventoryStatusComponent },
  { path: 'app-update-inventory', component: UpdateInventoryComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
