import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoElementsRoutingModule } from './demo-elements-routing.module';
import { DemoElementsComponent } from './page/demo-elements/demo-elements.component';
import { LandingComponent } from './page/landing/landing.component';


@NgModule({
  declarations: [DemoElementsComponent, LandingComponent],
  imports: [
    CommonModule,
    DemoElementsRoutingModule
  ]
})
export class DemoElementsModule { }
