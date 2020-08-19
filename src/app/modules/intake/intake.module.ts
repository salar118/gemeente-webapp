import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntakeRoutingModule } from './intake-routing.module';
import { IntakeHomeComponent } from './intake-home/intake-home.component';


@NgModule({
  declarations: [IntakeHomeComponent],
  imports: [
    CommonModule,
    IntakeRoutingModule
  ]
})
export class IntakeModule { }
