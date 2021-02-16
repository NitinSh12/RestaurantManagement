import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateFormControlsDirective } from './directives/validate-form-controls.directive';
import { UnsavedChangesService } from './services/unsaved-changes.service';



@NgModule({
  declarations: [ValidateFormControlsDirective],
  imports: [
    CommonModule
  ],
  providers: [UnsavedChangesService]
})
export class SharedModule { }
