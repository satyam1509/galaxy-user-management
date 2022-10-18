import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiCallServiceService } from 'src/app/admin/services/api-call-service.service';
import { emailValidator } from 'src/app/shared/validators/email-validator';

@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.scss']
})
export class DataModalComponent implements OnInit {

  actionBtn:string='Save';
  constructor(private formBuilder: FormBuilder,
    private api :ApiCallServiceService,
    @Inject(MAT_DIALOG_DATA) public editData :any,
    private dialogRef:MatDialogRef<DataModalComponent>,
    private toastr:ToastrService) { }

  userDataForm = this.formBuilder.group({
    // profile_img:[''],
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email: ['',[Validators.required,emailValidator]],
    mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  });

  ngOnInit(){
    if(this.editData){
    this.actionBtn='Update'
    // this.userDataForm.controls['profile_img'].setValue(this.editData.profile_img)
    this.userDataForm.controls['firstName'].setValue(this.editData.firstName);
    this.userDataForm.controls['lastName'].setValue(this.editData.lastName);
    this.userDataForm.controls['email'].setValue(this.editData.email);
    this.userDataForm.controls['mobile'].setValue(this.editData.mobile);
  }
}
/**
 * addData() function is used to call postData api to create data.
 */

  addData(){
    if(!this.editData){
    this.api.postData(this.userDataForm.getRawValue()).subscribe({
      next:(res)=>{
        this.toastr.success('','data added successfully');
        this.userDataForm.reset();
        this.dialogRef.close('save');
      },
      error:(error)=>{
        this.toastr.error('','error occcurred');
      }
    })
  }else{
    this.updateData();
  }
}

/**
 * updateData() function is used to call updateData api to Edit data.
 */

updateData(){
  this.api.updateData(this.userDataForm.value,this.editData.id).subscribe({
    next:(res)=>{
      this.toastr.success('','Updated Successfully');
      this.userDataForm.reset();
      this.dialogRef.close('update');
    },
    error:(err)=>{
      this.toastr.error('','Error Occurred during updating data');
    }
  });
}
}
