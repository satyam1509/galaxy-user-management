import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import {  GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';




@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatPasswordStrengthModule,
    SocialLoginModule
       
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1019540697766-c7uidsnqqfb2l58ona4j7r9mned9tqi4.apps.googleusercontent.com'
             )
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],


})
export class AuthModule { }
