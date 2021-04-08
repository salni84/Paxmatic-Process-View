import {Component, OnInit, Input} from '@angular/core';
import {ProcessService} from '../../../service/process-service';
import {ProcessElement} from '../../model/process-element';
import {LoginService} from '../../../service/login-service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import {LegendService} from '../../../service/legend-service';
import {DialogService} from "../../../service/dialog-service";

@Component({
  selector: 'app-basic-process',
  templateUrl: './basic-process.component.html',
  styleUrls: ['./basic-process.component.scss']
})

export class BasicProcessComponent implements OnInit {

  @Input() newProcess: ProcessElement;
  basicProcessList: ProcessElement[] = [];
  level = 'basic';
  showCreateElement = false;
  hideCreateElement = false;
  showAddButton = true;
  isAdmin = false;
  departments: any = [];

  constructor(private processServer: ProcessService,
              private loginService: LoginService,
              private dialog: DialogService,
              private legend: LegendService) {}

  ngOnInit() {
    this.getAllProcess();
    this.getDepartments();

    this.loginService.getLoginStatus().subscribe((data) => {
      if (data) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
        this.hideAddProcessComponent();
      }
    });
  }

  showAddProcessComponent() {
    this.showCreateElement = true;
    this.hideCreateElement = true;
    this.showAddButton = false;
  }

  hideAddProcessComponent() {
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
    if (this.isAdmin) {
      moveItemInArray(this.basicProcessList, event.previousIndex, event.currentIndex);
      for (let x = 0; x < this.basicProcessList.length; x++) {
        this.basicProcessList[x].position = x;
      }
      this.udpateProcess();
    }
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


  deleteProcessElement(id: number, name: string) {
    this.processServer.getProcess('sub', name)
      .subscribe(data => {
          if (data.toString().length > 0) {
            this.dialog.openDeleteDialog();
          } else {
            this.processServer.deleteProcess(id, 'basic')
              .subscribe(() => {
                this.getAllProcess();
              });
          }}
      );
  }

  getDepartments() {
    this.legend.getDepartments()
      .subscribe(data => {
        this.departments = data;
      });
  }
}
