import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../public/components/about-us/about-us.component';
import { ContactUsComponent } from '../public/components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard-ui/dashboard/dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
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
    ]
  },
  {
    path: '**',
    redirectTo: '/admin/dashboard/posts',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
