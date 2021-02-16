import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.initForm();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    // success part
}

/* Handle form errors in Angular 8 */
public errorHandling = (control: string, error: string) => {
  return this.loginForm.controls[control].hasError(error);
}

  private initForm() {
    return this.fb.group({
      userName: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(4)]]
    });
  }

}
