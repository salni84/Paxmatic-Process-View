import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private isAdmin: BehaviorSubject<boolean>;

  constructor() {
    this.isAdmin = new BehaviorSubject<boolean>(false);
  }

  isUserLoggedIn(isAdmin: boolean) {
    this.isAdmin.next(true);
  }

  isUserLoggedOut(isAdmin: boolean) {
    this.isAdmin.next(false);
  }

  getLoginStatus(): Observable<boolean> {
    return this.isAdmin.asObservable();
  }
}
