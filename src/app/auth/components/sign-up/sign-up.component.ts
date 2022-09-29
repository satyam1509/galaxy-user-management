import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { passwordValidator } from 'src/app/shared/validators/password-validator';
import { PasswordVisibilityService } from '../../services/password-visibility/password-visibility.service';
import { SignupService } from '../../services/signup-service/signup.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide = true;
  showDetails: boolean | undefined;
  signupForm;

  constructor(
    public passwordVisibilityService: PasswordVisibilityService,
    private signUpService: SignupService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
    ) {

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(8), passwordValidator]],
      cpassword: ['', [Validators.required, passwordValidator]],
    });
  }

  signup() {
    this.signUpService.signup(this.signupForm.getRawValue()).subscribe({
      next: () => {
        this.toastr.success('','Register Successfully!!');
        this.router.navigate(['/auth/login']);
        this.toastr.show('Please Login to continue!!');
      },
      error: (response) => {
        this.toastr.error('',response.error.message);
        console.log(response.error.message);
      }
    });
  }

  /** confirm password and set error for it */
  onPasswordMatcher() {
    if (this.signupForm.controls.password.value !== this.signupForm.controls.cpassword.value) {
      this.signupForm.controls['cpassword'].setErrors([{ 'Password Missmatch': true }]);
    }
    else {
      this.signupForm.controls['cpassword'].setErrors(null);
    }
  }
}
