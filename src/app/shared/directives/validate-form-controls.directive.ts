import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ValidateFormControlsModel } from '../models/validate-form-controls.model';

@Directive({
  selector: '[appValidateFormControls]'
})
export class ValidateFormControlsDirective implements OnInit {

  @Input() appValidateFormControls: ValidateFormControlsModel;

  constructor(private elmRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elmRef.nativeElement, 'visible', this.validateFormControls());
  }

  private validateFormControls(): boolean {
    const directiveParams = this.appValidateFormControls;
    return directiveParams.form.controls[directiveParams.control].hasError(directiveParams.error);
  }

}
