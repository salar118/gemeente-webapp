import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntakeHomeComponent } from './intake-home/intake-home.component';

const routes: Routes = [{ path: 'intake', component: IntakeHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntakeRoutingModule {}
