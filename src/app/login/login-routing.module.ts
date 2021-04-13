import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedChangesService } from '../shared/services/unsaved-changes.service';
import { LoginComponent } from './Containers/login/login.component';
import { SignupComponent } from './Containers/signup/signup.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: LoginComponent},
  {path:'register', component:SignupComponent, canDeactivate: [UnsavedChangesService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
