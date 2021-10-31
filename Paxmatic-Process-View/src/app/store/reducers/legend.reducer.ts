import {ActionTypes, LegendActions} from '../actions/legend.actions';
import {Departments} from '../../model/departments';


export interface LegendReducer {
  departments: Departments[];
}

export const initialState: LegendReducer = {
  departments: []
};

export function legendReducer(state = initialState, action: LegendActions): LegendReducer {
  switch (action.type) {
    case ActionTypes.loadAllDepartments:
      return {
        ...state,
        departments: action.payload,
      };

    case ActionTypes.departmentsLoaded:
      return {
        ...state,
        departments: action.payload,
      };

    case ActionTypes.addNewDepartment:
      return {
        ...state,
        departments: action.payload
      };

    case ActionTypes.deleteDepartment:
      return {
        ...state,
        departments: action.payload
      };

    default:
      return state;

  }
}
