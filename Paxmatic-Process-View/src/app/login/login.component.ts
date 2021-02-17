import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from '../../service/login-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: string;
  errormessage: string;
  @Output() isAdmin = new EventEmitter<boolean>();
  isLoggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {}

  logout() {
    this.isAdmin.emit(false);
    this.isLoggedIn = false;
    this.loginService.isLoggedOut(false);
  }

  passwordValidation() {
    if (this.password === 'sss') {
      this.isAdmin.emit(true);
      this.isLoggedIn = true;
      this.loginService.isLoggedIn(true);
      this.password = '';
      this.errormessage = '';
    } else {
      this.errormessage = 'Passwort nicht korrekt!';
    }
  }
}
