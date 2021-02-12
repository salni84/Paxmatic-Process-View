import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {ProcessService} from '../../service/process-service';
import {ProcessElement} from '../model/process-element';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-basic-process',
  templateUrl: './basic-process.component.html',
  styleUrls: ['./basic-process.component.scss']
})

export class BasicProcessComponent implements OnInit {

  constructor(private processServer: ProcessService) { }


  @Input() newProcess: ProcessElement;

  basicProcessList: ProcessElement[] = [];

  ngOnInit() {
    this.getAllProcess();
  }


  getAllProcess() {
    this.processServer.getProcess()
      .subscribe((process) => {
        this.basicProcessList = process;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.basicProcessList, event.previousIndex, event.currentIndex);

    for (let x = 0; x < this.basicProcessList.length; x++) {

      this.basicProcessList[x].position = x;
    }
    console.log(this.basicProcessList);
  }


 addNewProcess(newProcess: ProcessElement) {

   if (newProcess === undefined) {
     this.udpateProcess();
   } else {

     this.processServer.addProcessElement(newProcess)
       .subscribe((data) => {
         console.log(data);
       });
     this.basicProcessList.push(newProcess);
     this.getAllProcess();
   }
 }

  udpateProcess() {
    this.processServer.updateProcessList(this.basicProcessList)
      .subscribe((data) => {
        console.log(data);
      });
  }

 async deleteProcessElement(id: number) {
    this.processServer.delete(id)
      .subscribe((data) => {
        console.log(data);
        });
    await this.getAllProcess();
      }
}
