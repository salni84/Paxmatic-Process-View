import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoginWindowVisible = false;
  loginButton = 'Login';

  constructor() { }

  ngOnInit(): void {
  }


  showLogin() {

    this.isLoginWindowVisible = !this.isLoginWindowVisible;

    if (this.isLoginWindowVisible) {
      this.loginButton = 'Close';
    } else {
      this.loginButton = 'Login';
    }
  }


}
