import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProcessElement} from '../model/process-element';


@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.scss']
})
export class CreateProcessComponent implements OnInit {

  @Input() parentId;
  @Input() level;
  @Input() order;
  @Output() newProcessEvent = new EventEmitter<ProcessElement>();
  newProcess: ProcessElement = new ProcessElement();
  selected: string;
  forms = ['Pfeil', 'Kreis'];
  isNotDetailProcess = false;


  constructor() {}

  ngOnInit(): void {
    if (this.level === 'detail') {
      this.isNotDetailProcess = true;
    }
  }

 newElement() {
    if (this.selected === 'Kreis') {
      this.newProcess.form = 1;
    } else {
      this.newProcess.form = 0;
    }
    this.newProcess.level = this.level;
    this.newProcess.parent = this.parentId;
    this.newProcess.order = this.order;
    this.newProcess.isVisible = 1;
    this.newProcess.visibleName = this.newProcess.name;
    this.newProcess.position = 0;
    this.newProcessEvent.emit(this.newProcess);
  }

  emptyBox() {
    this.newProcess.name = '';
    this.newProcess.color = '';
    this.newProcess.isVisible = 0;
    this.newProcess.level = this.level;
    this.newProcess.parent = this.parentId;
    this.newProcess.order = this.order;
    this.newProcessEvent.emit(this.newProcess);
  }
}
