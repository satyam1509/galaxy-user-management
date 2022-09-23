import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(public passwordVisibilityService: PasswordVisibilityService,
    private signUpService: SignupService, private formBuilder: FormBuilder,
    private router: Router) {

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      cpassword: ['', [Validators.required]],
    });
  }

  signup() {

    this.signUpService.signup(this.signupForm.getRawValue()).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/auth']);
      },
      error: (error) => {
        console.log(error);
        // this.router.navigate(['/auth/login']);  
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
