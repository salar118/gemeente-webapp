import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: '', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
