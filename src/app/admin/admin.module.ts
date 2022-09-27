import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AngularMaterialModule } from '../angular-material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard-ui/dashboard/dashboard.component';
import { NavigationComponent } from './components/dashboard-ui/navigation/navigation.component';



@NgModule({
  declarations: [
    PostsComponent,
    ProfileComponent,
    DashboardComponent,
    NavigationComponent
    
 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
