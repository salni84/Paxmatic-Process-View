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
  level = 'basic';
  showCreateElement = false;
  hideCreateElement = false;
  showAddButton = true;
  isAdmin = false;



  ngOnInit() {
    if (localStorage.getItem('admin') === 'true') {
      this.isAdmin = true;
    }
    this.getAllProcess();
  }

  showAdd() {
    this.showCreateElement = true;
    this.hideCreateElement = true;
    this.showAddButton = false;
  }

  hideAdd() {
    this.showCreateElement = false;
    this.showAddButton = true;
    this.hideCreateElement = false;
  }

  hasPermission(showAdmin: boolean) {
    this.isAdmin = showAdmin;
  }

  getAllProcess() {
    this.processServer.getProcess('basic', '')
      .subscribe((process) => {
        this.basicProcessList = process;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.basicProcessList, event.previousIndex, event.currentIndex);

    for (let x = 0; x < this.basicProcessList.length; x++) {

      this.basicProcessList[x].position = x;
    }
    this.udpateProcess();
  }


 addNewProcess(newProcess: ProcessElement) {
     this.processServer.addProcessElement(newProcess, 'basic')
       .subscribe(() => {
         this.getAllProcess();
       });
     this.basicProcessList.push(newProcess);
 }

  udpateProcess() {
    this.processServer.updateProcessList(this.basicProcessList, 'basic')
      .subscribe(() => {
        this.getAllProcess();
      });
  }


 deleteProcessElement(id: number) {
    this.processServer.deleteProcess(id, 'basic')
      .subscribe(() => {
        this.getAllProcess();
        });
      }
}
