import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateFormControlsDirective } from './directives/validate-form-controls.directive';



@NgModule({
  declarations: [ValidateFormControlsDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
