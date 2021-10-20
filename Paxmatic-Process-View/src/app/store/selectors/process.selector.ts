import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ProcessElement} from '../../model/process-element';





const getProcessState = createFeatureSelector<any>('processState');

export const getProcess = createSelector(
  getProcessState,
  (process: any): ProcessElement[] => process.process
);

export const getChildProcessSelector = (uuid: number) => createSelector(
  getProcessState,
  (process: any): any => {
    const array = [];
    process.process.forEach((p) => {
      if (p.parent === uuid) {
        array.push(p);
      }
    });
    return array;
  }
);

export const getCurrentProcessSelector = (parent: number) => createSelector(
  getProcessState,
  (process: any): any => {
    const array = [];
    process.process.forEach((p) => {
      if (p.parent === parent) {
        array.push(p);
      }
    });
    return array;
  }
);


export const getBasicProcess = createSelector(
  getProcessState,
  (process: any): ProcessElement[] => {
    const list = [];
    if (process.process)  {
      process.process.forEach((p) => {
        if (p.parent === 0) {
            list.push(p);
        }
      });
    }
    return list;
  });
