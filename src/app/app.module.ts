import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig} from 'angularx-social-login';
import {  GoogleLoginProvider} from 'angularx-social-login';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1016994148249-cvijokf575kprvsj6899n1ms5a213uu4.apps.googleusercontent.com'
           )
        },
      ],
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent],


})
export class AppModule { }
