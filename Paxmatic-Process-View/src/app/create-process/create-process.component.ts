import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProcessElement} from '../model/process-element';


@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.scss']
})
export class CreateProcessComponent implements OnInit {

  newProcess: ProcessElement = new ProcessElement();

  @Output() newProcessEvent = new EventEmitter<ProcessElement>();


  constructor() { }

  ngOnInit(): void {}


 newElement() {
      this.newProcessEvent.emit(this.newProcess);
  }
}
