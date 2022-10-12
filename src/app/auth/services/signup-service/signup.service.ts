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

    return this.http.post(apis.auth.signUp, body);
  }
}

