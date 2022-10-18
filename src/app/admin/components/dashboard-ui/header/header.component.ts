import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() sideNavdrawer!: MatSidenav;

  constructor(private router: Router,
    private toastr: ToastrService) { }

  logout() {
    localStorage.setItem("userInfo", "{}");
    this.toastr.success('Successfully Logged Out!!')
    this.router.navigate(["/auth"]);
  }
}
