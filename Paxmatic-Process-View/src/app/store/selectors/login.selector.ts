import { createFeatureSelector, createSelector } from '@ngrx/store';


const getLoginState = createFeatureSelector<any>('loginState');

export const isLoggedIn = createSelector(
  getLoginState,
  (login: any): boolean => login.isLoggedIn
);
