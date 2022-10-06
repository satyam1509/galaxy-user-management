import { Component } from '@angular/core';
import { PasswordVisibilityService } from '../../services/password-visibility/password-visibility.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent   {
onPasswordMatcher() {
throw new Error('Method not implemented.');
}
changePasswordForm: any;

  constructor(public passwordVisibilityService:PasswordVisibilityService) { }

 

}
