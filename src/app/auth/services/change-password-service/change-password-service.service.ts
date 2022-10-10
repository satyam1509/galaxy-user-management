import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordServiceService {

  constructor(private http:HttpClient,
    private auth:AuthService) { }

  changePassword(body:any,_headers:any){
    return this.http.post('https://ai-lab-backend.herokuapp.com/api/v1/auth/reset-password',body,_headers);
  }

}
