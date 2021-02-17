import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isAdmin: BehaviorSubject<boolean>;

  constructor() {
    this.isAdmin = new BehaviorSubject<boolean>(false);
  }


  isLoggedIn(isAdmin: boolean) {
    this.isAdmin.next(true);
    console.log(isAdmin)
  }

  isLoggedOut(isAdmin: boolean) {
  this.isAdmin.next(false);
  console.log(isAdmin);
  }

  getLoginStatus(): Observable<boolean> {
    return this.isAdmin.asObservable();
  }


}
