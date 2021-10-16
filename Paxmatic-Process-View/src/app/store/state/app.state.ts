import {ActionReducerMap} from '@ngrx/store';
import {processReducer} from '../reducers/process.reducer';
import {loginReducer} from '../reducers/login.reducer';


export const reducers: ActionReducerMap<any> = {

  processState: processReducer,
  loginState: loginReducer

};
