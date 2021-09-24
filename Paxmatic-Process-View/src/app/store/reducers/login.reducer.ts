import {ActionTypes, LoginActions} from '../actions/login.actions';


export interface LoginReducer {
  isLoggedIn: boolean;
}

export const initialState: LoginReducer = {
  isLoggedIn: false,
};

export function loginReducer(state = initialState, action: LoginActions): LoginReducer {
 switch (action.type) {
   case ActionTypes.isLoggedIn: {
     return {
       ...state,
       isLoggedIn: action.payload,
     };
   }
   default:
     return state;
 }
}
