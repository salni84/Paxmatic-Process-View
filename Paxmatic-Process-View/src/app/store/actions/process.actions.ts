import {Action} from '@ngrx/store';

export enum ActionTypes {
  loadAllProcess = '[Process] loadAllProcess',
  processLoaded = '[Process] processLoaded',
  updateProcess = '[Process] updateProcess',
  deleteProcess = '[Process] deleteProcess',
  addNewProcess = '[Process] addNewProcess',
  updateProcessOrder = '[Process] updateProcessOrder',
}

export class LoadAllProcess implements Action {
  readonly type = ActionTypes.loadAllProcess;
  constructor(public payload) {
  }
}

export class ProcessLoaded implements Action {
  readonly type = ActionTypes.processLoaded;
  constructor(public payload) {
  }
}

export class UpdateProcess implements Action {
  readonly type = ActionTypes.updateProcess;
  constructor(public payload) {
  }
}

export class UpdateProcessOrder implements Action {
  readonly type = ActionTypes.updateProcess;
  constructor(public payload) {
  }
}

export class DeleteProcess implements Action {
  readonly type = ActionTypes.deleteProcess;
  constructor(public payload) {
  }
}

export class AddNewProcess implements Action {
  readonly type = ActionTypes.addNewProcess;
  constructor(public payload) {
  }
}

export type ProcessActions = LoadAllProcess |ProcessLoaded | UpdateProcess | DeleteProcess | AddNewProcess | UpdateProcessOrder;
