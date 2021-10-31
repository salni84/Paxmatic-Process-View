import {ActionReducerMap} from '@ngrx/store';
import {processReducer} from '../reducers/process.reducer';
import {loginReducer} from '../reducers/login.reducer';
import {legendReducer} from '../reducers/legend.reducer';


export const reducers: ActionReducerMap<any> = {

  processState: processReducer,
  loginState: loginReducer,
  legendState: legendReducer

};
