import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProcessElement} from '../model/process-element';
import {ProcessService} from '../../service/process-service';

@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.scss']
})
export class CreateProcessComponent implements OnInit {

  processList: ProcessElement[] = [];
  newProcess: ProcessElement = new ProcessElement();

  @Output() newProcessEvent = new EventEmitter<ProcessElement>();


  constructor(private processServer: ProcessService) { }

  ngOnInit(): void {}


 newElement() {
 /*   this.processList.push(this.newProcess);
    this.processServer.addProcessElement(this.processList)
      .subscribe((data) => {
      console.log(data);*/
      this.newProcessEvent.emit(this.newProcess);
   //    // });
  /*  await this.processServer.getProcess()
     .subscribe((process) => {
       this.basicProcessList = process;
       console.log(this.basicProcessList);
     });*/
  }
}
