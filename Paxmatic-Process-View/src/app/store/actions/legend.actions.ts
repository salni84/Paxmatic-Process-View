import {Action} from '@ngrx/store';


export enum ActionTypes {
  loadAllDepartments = '[Departments] loadAllDepartments',
  departmentsLoaded = '[Departments] departmentsLoaded',
  addNewDepartment = '[Departments] addNewDepartment',
  deleteDepartment = '[Departments] deleteDepartments',

}

export class LoadAllDepartments implements Action {
  readonly type = ActionTypes.loadAllDepartments;
  constructor(public payload) {
  }
}

export class DepartmentsLoaded implements Action {
  readonly type = ActionTypes.departmentsLoaded;
  constructor(public payload) {
  }
}

export class AddNewDepartment implements Action {
  readonly type = ActionTypes.addNewDepartment;
  constructor(public payload, public parent) {
  }
}

export class DeleteDepartment implements Action {
  readonly type = ActionTypes.deleteDepartment;
  constructor(public payload, public parent) {
  }
}


export type LegendActions =
  LoadAllDepartments |
  DepartmentsLoaded|
  AddNewDepartment|
  DeleteDepartment;
