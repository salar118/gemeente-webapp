import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KlantHomeComponent } from './klant-home/klant-home.component';

const routes: Routes = [{ path: '', component: KlantHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KlantRoutingModule {}
