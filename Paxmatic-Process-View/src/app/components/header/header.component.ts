import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../service/login-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoginWindowVisible = false;
  loginButton = 'Admin-Login';

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  showLogin() {
    this.scrollUp(),
      this.isLoginWindowVisible = !this.isLoginWindowVisible;

    if (this.isLoginWindowVisible) {
      this.loginButton = 'Close';
    } else {
      this.loginButton = 'Admin-Login';
      this.loginService.isUserLoggedOut(true);
    }
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }
}
