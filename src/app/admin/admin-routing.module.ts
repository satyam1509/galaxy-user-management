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
        path:'home',
        component:DashboardHomeComponent,
        data:{
          title:'home',
          breadcrumb:[
            {
              label:'Dashboard',
              url:'',
             },
           ]
        },
      },
      {
        path: 'posts',
        component: PostsComponent,data:{
          title:'home',
          breadcrumb:[
            {
              label:'Dashboard',
              url:'/admin/dashboard/home',
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
          title:'home',
          breadcrumb:[
            {
              label:'Dashboard',
              url:'/admin/dashboard/home',
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
          title:'home',
          breadcrumb:[
            {
              label:'Dashboard',
              url:'/admin/dashboard/home',
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
          title:'home',
          breadcrumb:[
            {
              label:'Dashboard',
              url:'/admin/dashboard/home',
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
          title:'home',
          breadcrumb:[
            {
              label:'Dashboard',
              url:'/admin/dashboard/home',
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
    redirectTo: '/admin/dashboard/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
