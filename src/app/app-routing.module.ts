import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'klant',
    loadChildren: () =>
      import('./modules/klant/klant.module').then((m) => m.KlantModule),
  },
  {
    path: 'intake',
    loadChildren: () =>
      import('./modules/intake/intake.module').then((m) => m.IntakeModule),
  },
  {
    path: 'behandeling',
    loadChildren: () =>
      import('./modules/behandeling/behandeling.module').then(
        (m) => m.BehandelingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
