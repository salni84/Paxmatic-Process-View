import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {}

  logout() {
    this.isAdmin.emit(false);
    localStorage.clear();
    this.isLoggedIn = false;
  }

  passwordValidation() {
    if (this.password === 'sss') {
      this.isAdmin.emit(true);
      this.isLoggedIn = true;
      this.password = '';
      localStorage.setItem('admin', String(true));
      this.errormessage = '';
    } else {
      this.errormessage = 'Passwort nicht korrekt!';
    }
  }
}
