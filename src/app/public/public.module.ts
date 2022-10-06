import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
