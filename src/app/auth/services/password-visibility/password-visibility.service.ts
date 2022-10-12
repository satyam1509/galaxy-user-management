import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordVisibilityService {
  public showPassword: boolean = true;
  constructor() { }

  public togglePasswordVisibility(): void {

      this.showPassword = !this.showPassword;

  }


 }

