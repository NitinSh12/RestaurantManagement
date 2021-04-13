import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeManagementModule } from '../recipe-management/recipe-management.module';
import { MainContainerComponent } from './container/main-container/main-container.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'main-container'},
  {path:'main-container', component: MainContainerComponent, children: [
    {path:'',loadChildren:()=>import('../recipe-management/recipe-management.module').then(m=>m.RecipeManagementModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManagementRoutingModule { }
