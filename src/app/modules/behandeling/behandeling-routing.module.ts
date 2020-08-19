import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BehandelingHomeComponent } from './behandeling-home/behandeling-home.component';

const routes: Routes = [
  { path: 'behandeling', component: BehandelingHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BehandelingRoutingModule {}
