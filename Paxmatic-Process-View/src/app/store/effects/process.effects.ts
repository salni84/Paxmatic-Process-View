import {Injectable} from '@angular/core';

import {ProcessService} from '../../../service/process-service';
import {map, mergeMap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {LoadAllProcess, ProcessLoaded} from '../actions/process.actions';

@Injectable()
export class ProcessEffects {


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

  constructor(private actions$: Actions, private processService: ProcessService) {}
}
