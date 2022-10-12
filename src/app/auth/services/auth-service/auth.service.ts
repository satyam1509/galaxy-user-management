import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: any = null;

  constructor() {
    this.userInfo = localStorage.getItem('userInfo') || "{}";
    this.userInfo = JSON.parse(this.userInfo);
  }


}