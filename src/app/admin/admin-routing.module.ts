import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from '../auth/components/change-password/change-password.component';
import { AboutUsComponent } from '../public/components/about-us/about-us.component';
import { ContactUsComponent } from '../public/components/contact-us/contact-us.component';
import { DashboardHomeComponent } from './components/dashboard-ui/dashboard-home/dashboard-home.component';
import { DashboardComponent } from './components/dashboard-ui/dashboard/dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path:'home',
        component:DashboardHomeComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'contact',
        component: ContactUsComponent
      },
      {
        path: 'about',
        component: AboutUsComponent
      },
      {
        path:'changepassword',
        component:ChangePasswordComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/admin/dashboard/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
