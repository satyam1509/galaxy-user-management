import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service/login.service';
import { PasswordVisibilityService } from '../../services/password-visibility/password-visibility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm;
  GoogleLoginProvider = GoogleLoginProvider;

  constructor(public passwordVisibilityService: PasswordVisibilityService,private authService: SocialAuthService,
    private formBuilder: FormBuilder, private router: Router,private loginService: LoginService) {

    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      role: ['', [Validators.required]]
    });
  }


  login() { 

    let body={
      email:this.loginForm.controls.Email.value,
      password:this.loginForm.controls.password.value,
    }

    this.loginService.login(body).subscribe({
      next:(response)=>{
        console.log("Login Success",response);
        this.router.navigateByUrl('/admin/dashboard');
      },
      error:(error)=>{
        console.log("error occurs",error);
        
      }
    })

    console.log(body);
  }

  // signInHandler():void{
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{ 
  //     localStorage.setItem('google_auth',JSON.stringify(data));
  //     this.router.navigateByUrl('/admin/dashboard');
  //   });
  // }

  signOut(): void {
    this.authService.signOut();
  }
  
  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
