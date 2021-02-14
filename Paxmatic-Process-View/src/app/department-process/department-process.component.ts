import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ProcessElement} from '../model/process-element';
import {ProcessService} from '../../service/process-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-process',
  templateUrl: './department-process.component.html',
  styleUrls: ['./department-process.component.scss']
})
export class DepartmentProcessComponent implements OnInit {

  constructor(private processServer: ProcessService, private route: ActivatedRoute) { }

  @Input() newProcess: ProcessElement;

  departmentProcessList: ProcessElement[] = [];
  parentId: string;
  level = 'department';
  showCreateElement = false;
  hideCreateElement = false;
  showAddButton = true;
  isAdmin = false;

  ngOnInit() {
    this.parentId = this.route.snapshot.paramMap.get('department');
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
    this.processServer.getProcess('department', this.parentId)
      .subscribe((process) => {
        this.departmentProcessList = process;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.departmentProcessList, event.previousIndex, event.currentIndex);

    for (let x = 0; x < this.departmentProcessList.length; x++) {

      this.departmentProcessList[x].position = x;
    }
    this.udpateProcess();
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
