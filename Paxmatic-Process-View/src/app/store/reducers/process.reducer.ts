import {ActionTypes, ProcessActions} from '../actions/process.actions';
import {ProcessElement} from '../../model/process-element';


export interface ProcessReducer {
  process: ProcessElement[];
}

export const initialState: ProcessReducer = {
  process: []
};

export function processReducer(state = initialState, action: ProcessActions): ProcessReducer {
  switch (action.type) {
    case ActionTypes.loadAllProcess:
      return {
        ...state,
        process: action.payload,
      };

    case ActionTypes.processLoaded:
      return {
        ...state, process: action.payload
      };

      case ActionTypes.updateProcess:
      return {
        ...state,
        process: action.payload
      };

    case ActionTypes.deleteProcess:
      return {
        ...state, process: action.payload
      };

    case ActionTypes.addNewProcess:
      return {
        ...state, process: action.payload
      };


    default:
      return state;
  }
}
