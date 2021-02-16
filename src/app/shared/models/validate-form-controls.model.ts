import { FormGroup } from "@angular/forms";

export interface ValidateFormControlsModel {
    form: FormGroup,
    control: string,
    error: string
}