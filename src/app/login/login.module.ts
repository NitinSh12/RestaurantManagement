import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './Containers/login-container/login-container.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginRoutingModule } from './login-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginContainerComponent,LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
