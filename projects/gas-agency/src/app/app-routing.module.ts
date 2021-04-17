import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
  // { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'auth',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./areas/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'demo',
    component: SiteLayoutComponent,
    children: [
      {
        path: '',
        // loadChildren: './areas/demo-elements/demo-elements.module#DemoElementsModule'
        loadChildren: () => import('./areas/demo-elements/demo-elements.module').then(m => m.DemoElementsModule)
      }
    ]
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./areas/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  { path: '**', redirectTo: 'demo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
