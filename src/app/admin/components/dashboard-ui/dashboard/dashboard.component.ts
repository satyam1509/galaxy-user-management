import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit{

  headerTitle='';
  active:boolean=false;


  constructor(public router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event=>{
        if(this.router.url.indexOf('dashboard') > -1){
          this.headerTitle='Dashboard'
          console.log(this.router.url);
          return;
        }
        switch(this.router.url){
          case '/admin/dashboard/home':
          this.headerTitle='Home'
          break;
          case '/admin/dashboard/post':
          this.headerTitle='post'
          break;
          case '/admin/dashboard/profile':
          this.headerTitle='profile'
          break;
          case '/admin/dashboard/about':
          this.headerTitle='About-us'
          break;
          case '/admin/dashboard/contact':
          this.headerTitle='Contact-Us'
          break;
          default:
          this.headerTitle=''
        }
    });
  }

}
