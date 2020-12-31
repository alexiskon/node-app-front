import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/feutured/services/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private logout: LogoutService, private router: Router) { }

  ngOnInit(): void {
  }

  Logout () {
    this.logout.logout()
    this.router.navigate([""])
  }

}
