import { Component, OnInit } from '@angular/core';
import { AboutUsComponent } from 'src/app/public/components/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/public/components/contact-us/contact-us.component';
import { PostsComponent } from '../../posts/posts.component';
import { ProfileComponent } from '../../profile/profile.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  renderComponent:any;
 
  ngOnInit() {
    this.renderComponent = PostsComponent;
  }

  posts() {
    this.renderComponent = PostsComponent;
  }

  profile() {
    this.renderComponent = ProfileComponent;
  }

  contact() {
    this.renderComponent = ContactUsComponent;
  }
  about() {
    this.renderComponent = AboutUsComponent;
  }


  
}
