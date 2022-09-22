import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import apis from 'src/app/shared/configs/apis';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  signup(body:any){
    console.log("signup service",body);
    // return this.http.post(apis.auth.signUp,body).pipe(
    //   (response)=>{
    //     console.log(response);
    //   }
    // )}
    return this.http.post(apis.auth.signUp, body);
  }
}

