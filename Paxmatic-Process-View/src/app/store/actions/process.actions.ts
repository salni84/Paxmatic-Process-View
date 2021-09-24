import {Action} from '@ngrx/store';

export enum ActionTypes {
  loadAllProcess = '[Process] loadAllProces'
}

export class LoadAllProcess implements Action {
  readonly type = ActionTypes.loadAllProcess;

}

export type LoginActions = LoadAllProcess;
