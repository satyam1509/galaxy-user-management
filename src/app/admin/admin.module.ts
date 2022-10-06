import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AngularMaterialModule } from '../angular-material.module';
import { DashboardComponent } from './components/dashboard-ui/dashboard/dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
import { SideNavComponent } from './components/dashboard-ui/side-nav/side-nav.component';
import { HeaderComponent } from './components/dashboard-ui/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    DashboardComponent,
    PostsComponent,
    SideNavComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
   
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
