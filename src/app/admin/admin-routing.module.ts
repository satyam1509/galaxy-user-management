import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from '../auth/components/change-password/change-password.component';
import { AboutUsComponent } from '../public/components/about-us/about-us.component';
import { ContactUsComponent } from '../public/components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard-ui/dashboard/dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data:{
      title:'dashboard',
      breadcrumb:[
        {
         label:'Dashboard',
         url:'',
        }
      ]
    },
    children: [
      {
        path: 'posts',
        component: PostsComponent,data:{
          breadcrumb:[
            {
              label:'Dashboard',
              url:'/admin/dashboard',
             },
             {
              label:'Posts',
              url:'',
             }
           ]
        },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data:{
          breadcrumb:[
            {
              label:'Dashboard',
              url:'/admin/dashboard',
             },
             {
              label:'Profile',
              url:'',
             }
           ]
        },
      },
      {
        path: 'contact',
        component: ContactUsComponent,
        data:{
          breadcrumb:[
            {
              label:'Dashboard',
              url:'/admin/dashboard',
             },
             {
              label:'Contact-Us',
              url:'',
             }
           ]
        },
      },
      {
        path: 'about',
        component: AboutUsComponent,
        data:{
          breadcrumb:[
            {
              label:'Dashboard',
              url:'/admin/dashboard',
             },
             {
              label:'About-Us',
              url:'',
             }
           ]
        },
      },
      {
        path:'changepassword',
        component:ChangePasswordComponent,
        data:{
          breadcrumb:[
            {
              label:'Dashboard',
              url:'/admin/dashboard',
             },
             {
              label:'Profile',
              url:'/admin/dashboard/profile',
             },
             {
              label:'Change-Password',
              url:'',
             }
           ]
        },
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/admin/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
