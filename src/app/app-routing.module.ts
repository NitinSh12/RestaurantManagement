import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', loadChildren: ()=> import('./login/login.module').then(m=>m.LoginModule)},
  {path:'order', loadChildren: ()=> import('./order-management/order-management.module').then(m=>m.OrderManagementModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
