import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth-service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  maxDate=new Date();

  profileForm = this.formBuilder.group({
    name:[{value:this.auth.userInfo.name,disabled:false},[Validators.required]],
    email: [{value:this.auth.userInfo.email,disabled:true}],
    role: [{value:this.auth.userInfo.role,disabled:true}],
    dob:[{value:this.auth.userInfo.dateOfBirth,disabled:false}]
  });

  constructor(private formBuilder: FormBuilder,public auth:AuthService) {
  }

  updateData(){

  let storageData:any = localStorage.getItem('userInfo')
  let modifiedData=JSON.parse(storageData);
  modifiedData.name=this.profileForm.controls.name.value;
  modifiedData.dateOfBirth=this.profileForm.controls.dob.value;
  localStorage.setItem('userInfo',JSON.stringify(modifiedData));
  }
}
