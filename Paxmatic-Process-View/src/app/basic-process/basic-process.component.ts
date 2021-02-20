import {Component, EventEmitter, OnInit, Output, Input, OnChanges} from '@angular/core';
import {ProcessService} from '../../service/process-service';
import {ProcessElement} from '../model/process-element';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {LoginService} from '../../service/login-service';


@Component({
  selector: 'app-basic-process',
  templateUrl: './basic-process.component.html',
  styleUrls: ['./basic-process.component.scss']
})

export class BasicProcessComponent implements OnInit {

  constructor(private processServer: ProcessService, private loginService: LoginService) {}


  @Input() newProcess: ProcessElement;

  basicProcessList: ProcessElement[] = [];
  level = 'basic';
  showCreateElement = false;
  hideCreateElement = false;
  showAddButton = true;
  isAdmin = false;



  ngOnInit() {
    this.getAllProcess();

    this.loginService.getLoginStatus().subscribe((data) => {
      if (data) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
        this.hideAdd();
      }
    });
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
