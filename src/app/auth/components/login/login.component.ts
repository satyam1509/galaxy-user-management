import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { emailValidator } from "src/app/shared/validators/email-validator";
import { passwordValidator } from "src/app/shared/validators/password-validator";
import { LoginService } from "../../services/login-service/login.service";
import { PasswordVisibilityService } from "../../services/password-visibility/password-visibility.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm:any;
  userInfo:any;

  constructor(
    public passwordVisibilityService: PasswordVisibilityService,
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {

  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      Email: ["",[Validators.required,emailValidator],],
      password: ["",[Validators.required,passwordValidator],],
      role: ["", [Validators.required]],
    });
  }


  login() {
    let body = {
      username: this.loginForm.controls.Email.value,
      password: this.loginForm.controls.password.value,
    };
    this.loginService.login(body).subscribe((res: any) => {
      res.role = this.loginForm.controls.role.value;
      localStorage.setItem("userInfo", JSON.stringify(res));
      this.userInfo = res;
      this.router.navigateByUrl("/admin/dashboard");
    });
  }
  

  signInWithGoogle() {
    this.loginService.signWithGoogle();
  }


}
