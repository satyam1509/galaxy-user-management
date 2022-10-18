import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import apis from 'src/app/shared/configs/apis';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordServiceService {

  constructor(private http:HttpClient) { }

  changePassword(body:any,_headers:any){
    return this.http.post(apis.auth.changePassword,body,_headers);
  }

}
