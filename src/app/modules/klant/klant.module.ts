import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KlantRoutingModule } from './klant-routing.module';
import { KlantHomeComponent } from './klant-home/klant-home.component';

@NgModule({
  declarations: [KlantHomeComponent],
  imports: [CommonModule, KlantRoutingModule],
  exports: [KlantHomeComponent],
})
export class KlantModule {}
