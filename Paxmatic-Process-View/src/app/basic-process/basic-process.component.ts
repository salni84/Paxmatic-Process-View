import { Component, OnInit } from '@angular/core';
import {ProcessService} from '../../service/process-service';
import {ProcessElement} from '../model/process-element';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-basic-process',
  templateUrl: './basic-process.component.html',
  styleUrls: ['./basic-process.component.scss']
})

export class BasicProcessComponent implements OnInit {

  constructor( private processServer: ProcessService) { }

  basicProcessList: ProcessElement[] = [];


  ngOnInit() {}


  getAllProcess() {
    this.processServer.getProcess()
      .subscribe((process) => {
        this.basicProcessList = process;
        console.log(this.basicProcessList);
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.basicProcessList, event.previousIndex, event.currentIndex);

    for (let x = 0; x < this.basicProcessList.length; x++) {

      this.basicProcessList[x].position = x;
    }
    console.log(this.basicProcessList);
  }

  delete() {
    this.processServer.deleteAll();
  }


  saveProcess() {
    this.processServer.addProcessElement(this.basicProcessList);
  }

  udpateProcess() {
    this.processServer.updateProcessList(this.basicProcessList);
  }
}
