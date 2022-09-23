import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import apis from 'src/app/shared/configs/apis';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  userinfo: any=null;


  constructor(private http:HttpClient,private router:Router){
    this.userinfo = localStorage.getItem('userinfo')||"{}";
    this.userinfo =JSON.parse(this.userinfo);
  }

  login(body:any) {
    
    console.log('login from auth');
    
    return this.http.post(apis.auth.login,body).pipe(tap((response)=>{
      localStorage.setItem("userinfo",JSON.stringify(response));
      this.userinfo=response;
    })
    )
  }

  // logout(){
  //   console.log("logout Clicked!!!");
  //   this.userinfo={};
  //   localStorage.setItem("userinfo","{}");
  //   this.router.navigate(["/auth"]);
  // }

  
}
