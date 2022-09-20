import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PasswordVisibilityService } from '../../services/password-visibility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Email = new FormControl('', [Validators.required, Validators.email]);
  password= new FormControl('',[Validators.required]);

  

  constructor(public passwordVisibilityService:PasswordVisibilityService) { }

  ngOnInit(): void {
  }

}
