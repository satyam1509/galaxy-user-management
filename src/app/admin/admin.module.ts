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
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatCarouselModule } from 'ng-mat-carousel';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { DataModalComponent } from './components/posts/data-modal/data-modal.component';


@NgModule({
  declarations: [
    ProfileComponent,
    DashboardComponent,
    PostsComponent,
    SideNavComponent,
    HeaderComponent,
    DataModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatTableExporterModule,
    MatCarouselModule.forRoot(),
    NgDynamicBreadcrumbModule,
    ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
