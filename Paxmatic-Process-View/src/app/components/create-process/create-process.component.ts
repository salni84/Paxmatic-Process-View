import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProcessElement} from '../../model/process-element';
import {ProcessService} from '../../../service/process-service';
import {LegendService} from '../../../service/legend-service';


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
  selectedForm;
  selectedDepartment;
  forms = ['Pfeil', 'Kreis'];
  isNotDetailProcess = false;
  value: 'Name';
  isNotBasic = true;
  departments: any = [];


  constructor(private processService: ProcessService, private legend: LegendService) {
  }

  ngOnInit(): void {
    this.getDepartments();
    if (this.level === 'detail') {
      this.isNotDetailProcess = true;
    }
    this.isNotBasic = this.level !== 'basic';
  }

  getDepartments() {
    this.legend.getDepartments()
      .subscribe(data => {
        this.departments = data;
      });
  }

  createNewProcessElement() {
    if (this.selectedForm === 'Kreis') {
      this.newProcess.form = 1;
    } else if (this.selectedForm === 'Pfeil') {
      this.newProcess.form = 0;
    }
    this.newProcess.isBubble = 0;
    this.newProcess.color = this.selectedDepartment;
    this.newProcess.level = this.level;
    this.newProcess.parent = this.parentId;
    this.newProcess.order = this.order;
    this.newProcess.isVisible = 1;
    this.newProcess.visibleName = this.newProcess.name;
    this.newProcessEvent.emit(this.newProcess);
  }

  createEmptyProcessElement() {
    this.newProcess.name = '';
    this.newProcess.color = '';
    this.newProcess.isVisible = 0;
    this.newProcess.level = this.level;
    this.newProcess.parent = this.parentId;
    this.newProcess.order = this.order;
    this.newProcess.isBubble = 0;
    this.newProcess.form = 0;
    this.newProcess.visibleName = '';
    this.newProcessEvent.emit(this.newProcess);
  }
}
