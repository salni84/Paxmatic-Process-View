import {Injectable} from '@angular/core';

import {ProcessService} from '../../../service/process-service';
import {map, switchMap} from 'rxjs/operators';
import {ActionTypes, LoadAllProcess} from '../actions/process.actions';
import {ProcessElement} from '../../model/process-element';
import {Actions, createEffect, ofType} from "@ngrx/effects";

@Injectable()
export class ProcessEffects {
  constructor(private actions$: Actions, private processService: ProcessService) {
  }

/*
  loadProcess$ = createEffect(
    ofType(ActionTypes.loadAllProcess),
    switchMap(() =>
      this.processService
        .getAllProcess('basic')
        .pipe(
          map(
            (process: ProcessElement[]) => new LoadAllProcess())
        )
    )
  );*/
}
