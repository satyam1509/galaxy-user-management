import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/dashboard-ui/navigation/navigation.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:NavigationComponent
  },
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
