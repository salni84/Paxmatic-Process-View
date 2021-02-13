import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProcessElement} from '../model/process-element';


@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.scss']
})
export class CreateProcessComponent implements OnInit {

  newProcess: ProcessElement = new ProcessElement();

  @Input() parentId;
  @Input() level;
  @Input() order;
  @Output() newProcessEvent = new EventEmitter<ProcessElement>();


  constructor() { }

  ngOnInit(): void {}


 newElement() {
   this.newProcess.level = this.level;
   this.newProcess.parent = this.parentId;
   this.newProcess.order = this.order;
   this.newProcessEvent.emit(this.newProcess);
  }

  emptyBox() {
    this.newProcess.name = ' ';
    this.newProcess.level = this.level;
    this.newProcess.parent = this.parentId;
    this.newProcess.order = this.order;
    this.newProcessEvent.emit(this.newProcess);
    console.log(this.newProcess);
  }
}
