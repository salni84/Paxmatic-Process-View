import {Injectable} from '@angular/core';

import {ProcessService} from '../../../service/process-service';
import {map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {LoadAllProcess, ProcessLoaded} from '../actions/process.actions';
import {Store} from '@ngrx/store';

@Injectable()
export class ProcessEffects {

  constructor(private actions$: Actions, private processService: ProcessService, private store: Store) {
  }


  loadAllProcess$ = createEffect(() => this.actions$.pipe(
    ofType('[Process] loadAllProcess'),
    mergeMap(() => this.processService.getFullProcessLoad()
      .pipe(
        map(process => new ProcessLoaded(process))
      ))
    )
  );

  updateProcess$ = createEffect(() => this.actions$.pipe(
    ofType('[Process] updateProcess'),
    mergeMap((payload) => this.processService.updateProcessProperties(payload)
      .pipe(
        map(process => new LoadAllProcess(process))
      ))
  ));

  updateProcessOrder$ = createEffect(() => this.actions$.pipe(
    ofType('[Process] updateProcessOrder'),
    mergeMap((payload) => this.processService.updateProcessOrder(payload)
      .pipe(
        map(process => new LoadAllProcess(process))
      ))
  ));

  getBasicProcess$ = createEffect( () => this.actions$.pipe(
    ofType('[Process] getBasicProcess'),
    mergeMap(() => this.processService.getProcess(0)
      .pipe(
        map(process => new ProcessLoaded(process))
      ))
    ));

  deleteProcess$ = createEffect(() => this.actions$.pipe(
    ofType('[Process] deleteProcess'),
    mergeMap((payload) => this.processService.deleteProcess(payload)
      .pipe(
        map(process => new LoadAllProcess(process))
      ))
  ));

  addNewProcess$ = createEffect(() => this.actions$.pipe(
    ofType('[Process] addNewProcess'),
    mergeMap((payload) => this.processService.addProcessElement(payload)
      .pipe(
        map(process => new LoadAllProcess(process))
      ))
  ));
}
