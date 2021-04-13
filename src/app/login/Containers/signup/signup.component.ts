import { Component, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user-model';
import { UnsavedChangesGuard } from 'src/app/shared/models/unsaved-changes-guard-model';
import { SignupServiceService } from '../../Services/signup-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, UnsavedChangesGuard {
  Roles: any = ['Admin', 'Author', 'Reader'];
  signupForm = this.initForm();
  registerClicked = new EventEmitter<User>();

  constructor(private fb: FormBuilder, private signupServiceService: SignupServiceService) { }

  ngOnInit(): void {
  }

  UnsavedChangesPrompt() {
    return !this.signupForm.dirty;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }

    // success part
    this.signupServiceService.registerUser(this.signupForm.value as User).subscribe(this.userSignedUp);
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.signupForm.controls[control].hasError(error);
  }

  private userSignedUp(message: string) {
    console.log(message);
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
