import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: any = null;

  constructor(private router:Router) {
    this.userInfo = localStorage.getItem('userInfo') || "{}";
    this.userInfo = JSON.parse(this.userInfo);
  }


}