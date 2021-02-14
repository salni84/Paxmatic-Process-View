import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: string;
  @Output() isAdmin = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {}

  logout() {
    this.isAdmin.emit(false);
  }

  passwordValidation() {
    if (this.password === 'sss') {
      this.isAdmin.emit(true);
    }
  }
}
