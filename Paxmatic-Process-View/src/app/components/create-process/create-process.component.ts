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

  @Input() parent;
  @Input() level;
  @Input() order;
  @Input() uuid;
  @Input() color;
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

  getRandomNumber() {
    return Math.floor((1000000 + Math.random() * 900000));
  }

  createNewProcessElement() {
    if (this.selectedForm === 'Kreis') {
      this.newProcess.form = 1;
    } else if (this.selectedForm === 'Pfeil') {
      this.newProcess.form = 0;
    }
    this.newProcess.bubble = false;
    // this.newProcess.color = this.selectedDepartment;
    this.newProcess.color = this.color;
    this.newProcess.level = this.level;
    this.newProcess.verticalorder = this.order;
    this.newProcess.visible = true;
    this.newProcess.uuid = this.getRandomNumber();
    this.newProcess.parent = this.parent;
    this.newProcess.position = 0;
    this.newProcessEvent.emit(this.newProcess);


  }

  createEmptyProcessElement() {
    this.newProcess.processname = '';
    this.newProcess.color = '';
    this.newProcess.visible = false;
    this.newProcess.level = this.level;
    this.newProcess.verticalorder = this.order;
    this.newProcess.bubble = false;
    this.newProcess.form = 0;
    this.newProcessEvent.emit(this.newProcess);
  }
}
