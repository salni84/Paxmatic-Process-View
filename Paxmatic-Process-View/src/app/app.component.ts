import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {ProcessElement} from './model/process-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Paxmatic-Process-View';

  constructor(private store1: Store<{process: ProcessElement[]}>) {
    this.store1.dispatch({ type: '[Process] loadAllProcess'});
  }
}
