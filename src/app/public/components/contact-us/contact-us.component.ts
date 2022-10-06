import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(private formBuilder: FormBuilder,) { }

  contactForm = this.formBuilder.group({
    fullName: ['', [Validators.required]],
    Email: ['', [Validators.required, emailValidator]],
    message: ['', [Validators.required]]
  })

}
