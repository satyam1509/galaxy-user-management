import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
constructor(
  private auth:AuthService,
  private router:Router
){

}
  canActivate()
    {
    if(this.auth.userInfo.access_token){
      return true;
    }
    else{
      this.router.navigate(['/auth/login']);
      return false;
    }
    }
  }
  

