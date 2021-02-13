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


  ngOnInit() {
    this.parentId = this.route.snapshot.paramMap.get('department');
    console.log(this.parentId)

    this.getAllProcess();

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
    console.log(this.departmentProcessList);
  }


  addNewProcess(newProcess: ProcessElement) {

    if (newProcess.name === undefined) {
      this.udpateProcess();
    } else {

      this.processServer.addBasicProcessElement(newProcess, 'department')
        .subscribe((data) => {
          console.log(data);
        });
      this.departmentProcessList.push(newProcess);
      this.getAllProcess();
    }
  }

  udpateProcess() {
    this.processServer.updateBasicProcessList(this.departmentProcessList, 'department')
      .subscribe((data) => {
        console.log(data);
      });
  }

  async deleteProcessElement(id: number) {
    this.processServer.deleteBasicProcess(id, 'department')
      .subscribe((data) => {
        console.log(data);
      });
    await this.getAllProcess();
  }

}
