import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PasswordVisibilityService } from '../../services/password-visibility.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;
  showDetails: boolean | undefined;


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  pswd = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPswd = new FormControl('', [Validators.required]);

  constructor(public passwordVisibilityService: PasswordVisibilityService) { }

  ngOnInit(): void {
  }


  /** confirm password and set error for it */
  onPasswordMatcher() {
    if (this.pswd.value !== this.confirmPswd.value) {
      this.confirmPswd.setErrors([{ 'Password Missmatch': true }]);
    }
    else {
      this.confirmPswd.setErrors(null);
    }


  }

}
