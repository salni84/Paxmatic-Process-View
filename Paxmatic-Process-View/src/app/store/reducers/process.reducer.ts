import {ActionTypes, ProcessActions} from '../actions/process.actions';
import {ProcessElement} from '../../model/process-element';


export interface ProcessReducer {
  process: ProcessElement[];
  parent: number;
}

export const initialState: ProcessReducer = {
  process: [],
  parent: null,
};

export function processReducer(state = initialState, action: ProcessActions): ProcessReducer {
  switch (action.type) {
    case ActionTypes.loadAllProcess:
      return {
        ...state,
        process: action.payload,
        parent: 0
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
        ...state,
        process: [action.payload, state.parent]
      };

    case ActionTypes.addNewProcess:
      return {
        ...state,
        process: [action.payload, state.parent]
      };


    default:
      return state;
  }
}
