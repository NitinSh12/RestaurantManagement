import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeManagementModule } from '../recipe-management/recipe-management.module';
import { ChildContainerComponent } from './child-container/child-container.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'recipe-child'},
  {path:'recipe-child', component: ChildContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeManagementRoutingModule { }
