import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildContainerComponent } from './child-container/child-container.component';
import { RecipeManagementRoutingModule } from './recipe-management-routing.module';


@NgModule({
  declarations: [ChildContainerComponent],
  imports: [
    CommonModule,
    RecipeManagementRoutingModule
  ],
  exports: [ChildContainerComponent]
})
export class RecipeManagementModule { }
