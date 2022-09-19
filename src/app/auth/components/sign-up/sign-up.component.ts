import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
hide=true;
showDetails: boolean | undefined;

emailFormControl = new FormControl('', [Validators.required, Validators.email]);
firstName = new FormControl('',[Validators.required]);
lastName = new FormControl('',[Validators.required]);
mobile=new FormControl('',[Validators.required]);

  constructor() { }


  ngOnInit(): void {
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }

}
