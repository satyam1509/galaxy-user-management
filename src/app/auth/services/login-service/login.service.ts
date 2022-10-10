import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import apis from 'src/app/shared/configs/apis';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userinfo: any = null;

  
  constructor(private http: HttpClient,
    private router: Router,
    private auth: SocialAuthService) {
    this.userinfo = localStorage.getItem('userInfo') || "{}";
    this.userinfo = JSON.parse(this.userinfo);
  }

  login(body: any) {
    return this.http.post(apis.auth.login, body)
  }

  signWithGoogle() {
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.auth.authState.subscribe((user: any) => {
      user.token = user.idToken;
      user.isSocial = true;
      user.role = 'user';
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigateByUrl('admin/dashboard/posts');
    });
  }


}




