import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {LegendService} from '../../../service/legend-service';
import {DepartmentsLoaded, LoadAllDepartments} from '../actions/legend.actions';



@Injectable()
export class LegendEffects {

  constructor(private actions$: Actions, private legendService: LegendService) {
  }

  loadAllDepartments$ = createEffect(() => this.actions$.pipe(
    ofType('[Departments] loadAllDepartments'),
    mergeMap(() => this.legendService.getDepartments()
      .pipe(
        map(departments => new DepartmentsLoaded(departments))
      ))
    )
  );

  addNewDepartment$ = createEffect(() => this.actions$.pipe(
    ofType('[Departments] addNewDepartment'),
    mergeMap((payload) => this.legendService.createDepartment(payload)
      .pipe(
        map(departments => new LoadAllDepartments(departments))
      ))
  ));

  deleteDepartment$ = createEffect(() => this.actions$.pipe(
    ofType('[Departments] deleteDepartment'),
    mergeMap((payload: number) => this.legendService.deleteDepartment(payload)
      .pipe(
        map(departments => new LoadAllDepartments(departments))
      ))
  ));
}
