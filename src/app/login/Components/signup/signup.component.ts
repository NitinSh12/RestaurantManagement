import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  signupForm = this.initForm();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

/* Handle form errors in Angular 8 */
public errorHandling = (control: string, error: string) => {
  return this.signupForm.controls[control].hasError(error);
}

  private initForm() {
    return this.fb.group({
        userName: ['',Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(4)]],
        roles: ['',Validators.required]
    });
  }

}
