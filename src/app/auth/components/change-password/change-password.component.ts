import { HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { passwordValidator } from 'src/app/shared/validators/password-validator';
import { AuthService } from '../../services/auth-service/auth.service';
import { ChangePasswordServiceService } from '../../services/change-password-service/change-password-service.service';
import { PasswordVisibilityService } from '../../services/password-visibility/password-visibility.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent  {



  constructor(public passwordVisibilityService:PasswordVisibilityService,
    private formBuilder:FormBuilder,
    private changePswd:ChangePasswordServiceService,
    private toastr: ToastrService,
    private router: Router,
    private auth:AuthService) { }

  changePasswordForm = this.formBuilder.group({
    password:['',[Validators.required,passwordValidator]],
    cpassword: ['',[Validators.required,passwordValidator]],
  });


   access_token=this.auth.userInfo.access_token;
   headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.access_token}`
});

 requestOptions = { headers: this.headers };


  changePassword(){
   this.changePswd.changePassword(this.changePasswordForm.getRawValue(),this.requestOptions).subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
        this.toastr.show('Password Changed!!','Please Login Again');
      },
      error: (response) => {
        this.toastr.error('',response.error.message);
      }
    })
  }

  onPasswordMatcher() {
    if (this.changePasswordForm.controls.password.value !== this.changePasswordForm.controls.cpassword.value) {
      this.changePasswordForm.controls['cpassword'].setErrors([{ 'Password Missmatch': true }]);
    }
    else {
      this.changePasswordForm.controls['cpassword'].setErrors(null);
    }
  }
}
