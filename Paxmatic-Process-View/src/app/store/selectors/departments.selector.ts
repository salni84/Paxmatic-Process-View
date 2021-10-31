import { createFeatureSelector, createSelector } from '@ngrx/store';
import {Departments} from '../../model/departments';


const getDepartmentsState = createFeatureSelector<any>('legendState');

export const getDepartments = createSelector(
  getDepartmentsState,
  (departments: any): Departments[] => departments
);

export const getCurrentDepartmentsSelector = (uuid: number) => createSelector(
  getDepartmentsState,
  (department: any): any => {
    const array = [];

    department.departments.forEach((p) => {
      if (p.parent === uuid) {
        array.push(p);
      }
    });
    return array;
  }
);
