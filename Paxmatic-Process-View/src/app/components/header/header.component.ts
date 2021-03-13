import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../service/login-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoginWindowVisible = false;
  loginButton = 'Login';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {}

  showLogin() {
    this.isLoginWindowVisible = !this.isLoginWindowVisible;

    if (this.isLoginWindowVisible) {
      this.loginButton = 'Close';
    } else {
      this.loginButton = 'Login';
      this.loginService.isLoggedOut(true);
    }
  }
}
