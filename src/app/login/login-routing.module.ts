import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginContainerComponent } from './Containers/login-container/login-container.component';

const routes: Routes = [
  {path:'', component: LoginContainerComponent, pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: LoginComponent},
  {path:'register', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
