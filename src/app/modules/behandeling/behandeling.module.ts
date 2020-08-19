import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehandelingRoutingModule } from './behandeling-routing.module';
import { BehandelingHomeComponent } from './behandeling-home/behandeling-home.component';


@NgModule({
  declarations: [BehandelingHomeComponent],
  imports: [
    CommonModule,
    BehandelingRoutingModule
  ]
})
export class BehandelingModule { }
