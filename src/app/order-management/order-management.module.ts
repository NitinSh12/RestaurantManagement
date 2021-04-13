import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './container/main-container/main-container.component';
import { OrderManagementRoutingModule } from './order-managment-routing.module';
import { RecipeManagementModule } from '../recipe-management/recipe-management.module';
import { RecipeManagementRoutingModule } from '../recipe-management/recipe-management-routing.module';



@NgModule({
  declarations: [MainContainerComponent],
  imports: [
    CommonModule,
    OrderManagementRoutingModule
  ]
})
export class OrderManagementModule { }
