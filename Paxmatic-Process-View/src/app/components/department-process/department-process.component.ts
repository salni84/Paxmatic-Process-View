import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ProcessElement} from '../../model/process-element';
import {ProcessService} from '../../../service/process-service';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../../../service/login-service';
import {Location} from '@angular/common';
import {LegendService} from '../../../service/legend-service';
import {DialogService} from '../../../service/dialog-service';

@Component({
  selector: 'app-department-process',
  templateUrl: './department-process.component.html',
  styleUrls: ['./department-process.component.scss']
})
export class DepartmentProcessComponent implements OnInit {

  @Input() newProcess: ProcessElement;
  departmentProcessList: ProcessElement[] = [];
  checkDuplikatesList: ProcessElement [] = [];
  parentId: string;
  level = 'department';
  showCreateElement = false;
  hideCreateElement = false;
  showAddButton = true;
  isAdmin = false;
  departments: any = [];

  constructor(private location: Location,
              private processServer: ProcessService,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private legend: LegendService,
              private dialog: DialogService
              ) {  }


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
    this.getAllDepartmentProcesses();
    this.getAllProcess();
    this.getDepartments();
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

  getAllDepartmentProcesses() {
    this.processServer.getAllProcess('department')
      .subscribe((process) => {
        this.checkDuplikatesList = process;
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
    if (this.checkDuplikates(newProcess) === true) {
      return;
    } else {
      this.processServer.addProcessElement(newProcess, 'department')
        .subscribe(() => {
          this.getAllDepartmentProcesses();
          this.getAllProcess();
        });
      this.departmentProcessList.push(newProcess);
    }
  }

  udpateProcess() {
    this.processServer.updateProcessList(this.departmentProcessList, 'department')
      .subscribe(() => {
        this.getAllProcess();
      });
  }

  deleteProcessElement(id: number, name: string) {
    this.processServer.getProcess('detail', name)
      .subscribe(data => {
          if (data.toString().length > 0) {
            this.dialog.openDeleteDialog();
          } else {
            this.processServer.deleteProcess(id, 'department')
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

  checkDuplikates(newProcess: ProcessElement): boolean {
    let check = false;
    this.checkDuplikatesList.forEach(data => {
      if (data.name === newProcess.name) {
        check = true;
        this.dialog.openDuplikateDialog();
      }
    });
    return check;
  }
}
