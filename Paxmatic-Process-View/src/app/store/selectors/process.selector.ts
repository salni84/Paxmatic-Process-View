import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ProcessElement} from '../../model/process-element';


const getProcessState = createFeatureSelector<any>('processState');

export const getProcess = createSelector(
  getProcessState,
  (process: any): ProcessElement[] => process.process
);
