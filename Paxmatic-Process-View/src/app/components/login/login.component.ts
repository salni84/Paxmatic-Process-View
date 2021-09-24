import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from '../../../service/login-service';
import {environment} from '../../../environments/environment';
import { Store } from '@ngrx/store';
import {ActionTypes, IsLoggedIn} from "../../store/actions/login.actions";

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

  constructor(private loginService: LoginService, private store: Store) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.scrollUp();
    this.store.dispatch(new IsLoggedIn(false));
    this.isLoggedIn = false;
  }

  passwordValidation() {
    if (this.password === environment.password) {
    this.store.dispatch(new IsLoggedIn(true));
      this.scrollUp();
      this.isLoggedIn = true;
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
