import {Action} from '@ngrx/store';

export enum ActionTypes {
  isLoggedIn = '[Login] is logged in'
}

export class IsLoggedIn implements Action {
  readonly type = ActionTypes.isLoggedIn;
  constructor(public payload) {
  }
}

export type LoginActions = IsLoggedIn;
