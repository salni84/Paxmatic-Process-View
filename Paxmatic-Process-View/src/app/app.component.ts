import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {ProcessElement} from './model/process-element';
import {Departments} from './model/departments';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Paxmatic-Process-View';

  constructor(private store: Store<{ process: ProcessElement[] }>, private store2: Store<{ departments: Departments[] }>) {
    this.store.dispatch({type: '[Process] loadAllProcess'});
    this.store.dispatch({type: '[Departments] loadAllDepartments'});
  }
}
