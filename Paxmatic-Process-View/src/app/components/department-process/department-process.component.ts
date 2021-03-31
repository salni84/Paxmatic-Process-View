import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ProcessElement} from '../../model/process-element';
import {ProcessService} from '../../../service/process-service';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../../../service/login-service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-department-process',
  templateUrl: './department-process.component.html',
  styleUrls: ['./department-process.component.scss']
})
export class DepartmentProcessComponent implements OnInit {

  @Input() newProcess: ProcessElement;

  departmentProcessList: ProcessElement[] = [];
  parentId: string;
  level = 'department';
  showCreateElement = false;
  hideCreateElement = false;
  showAddButton = true;
  isAdmin = false;

  constructor(private location: Location,
              private processServer: ProcessService,
              private route: ActivatedRoute,
              private loginService: LoginService) {  }


  ngOnInit() {
    this.loginService.getLoginStatus().subscribe((data) => {
      if (data) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
        this.hideAddProcessComponent();
      }
    });
    this.parentId = this.route.snapshot.paramMap.get('department');
    this.getAllProcess();
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
    this.processServer.getProcess('department', this.parentId)
      .subscribe((process) => {
        this.departmentProcessList = process;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.isAdmin) {
      moveItemInArray(this.departmentProcessList, event.previousIndex, event.currentIndex);
      for (let x = 0; x < this.departmentProcessList.length; x++) {
        this.departmentProcessList[x].position = x;
      }
      this.udpateProcess();
    }
  }

  addNewProcess(newProcess: ProcessElement) {
      this.processServer.addProcessElement(newProcess, 'department')
        .subscribe(() => {
          this.getAllProcess();
        });
      this.departmentProcessList.push(newProcess);
  }

  udpateProcess() {
    this.processServer.updateProcessList(this.departmentProcessList, 'department')
      .subscribe(() => {
        this.getAllProcess();
      });
  }

  deleteProcessElement(id: number) {
    this.processServer.deleteProcess(id, 'department')
      .subscribe(() => {
        this.getAllProcess();
      });
  }
}
