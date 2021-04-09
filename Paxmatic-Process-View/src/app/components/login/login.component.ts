import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from '../../../service/login-service';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() isAdmin = new EventEmitter<boolean>();
  password: string;
  errormessage: string;
  isLoggedIn = false;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.scrollUp();
    this.isAdmin.emit(false);
    this.isLoggedIn = false;
    this.loginService.isUserLoggedOut(false);
  }

  passwordValidation() {
    if (this.password === environment.password) {
      this.scrollUp();
      this.isAdmin.emit(true);
      this.isLoggedIn = true;
      this.loginService.isUserLoggedIn(true);
      this.password = '';
      this.errormessage = '';
    } else {
      this.errormessage = 'Passwort nicht korrekt!';
    }
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }
}
