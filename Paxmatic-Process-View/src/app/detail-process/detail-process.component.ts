import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ProcessElement} from '../model/process-element';
import {ProcessService} from '../../service/process-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-process',
  templateUrl: './detail-process.component.html',
  styleUrls: ['./detail-process.component.scss']
})
export class DetailProcessComponent implements OnInit {

  constructor(private processServer: ProcessService, private route: ActivatedRoute) { }

  @Input() newProcess: ProcessElement;

  detailProcessList: ProcessElement[] = [];
  parentId: string;
  level = 'detail';
  showCreateElement = false;
  hideCreateElement = false;
  showAddButton = true;

  firstProcessRow: ProcessElement[] = [];
  secondProcessRow: ProcessElement[] = [];
  thirdProcessRow: ProcessElement[] = [];
  fourthProcessRow: ProcessElement[] = [];
  fifthProcessRow: ProcessElement[] = [];
  sixthProcessRow: ProcessElement[] = [];

  ngOnInit() {
    this.parentId = this.route.snapshot.paramMap.get('detail');
    console.log(this.parentId);
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


  getAllProcess() {
    this.firstProcessRow = [];
    this.secondProcessRow = [];
    this.thirdProcessRow = [];
    this.fourthProcessRow = [];
    this.fifthProcessRow = [];
    this.sixthProcessRow = [];
    this.processServer.getProcess('detail', this.parentId)

      .subscribe((process) => {
        this.detailProcessList = process;

        this.detailProcessList.forEach((data) => {

          if (data.order === 1) {

            this.firstProcessRow.push(data);
          }
          if (data.order === 2) {

            this.secondProcessRow.push(data);
          }

          if (data.order === 3) {

            this.thirdProcessRow.push(data);
          }

          if (data.order === 4) {

            this.fourthProcessRow.push(data);
          }

          if (data.order === 5) {

            this.fifthProcessRow.push(data);
          }

          if (data.order === 6) {

            this.sixthProcessRow.push(data);
          }
      });
    });

  }

  drop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.firstProcessRow, event.previousIndex, event.currentIndex);
    this.showAdd();
    for (let x = 0; x < this.firstProcessRow.length; x++) {
      this.firstProcessRow[x].position = x;
    }
  }

  drop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.secondProcessRow, event.previousIndex, event.currentIndex);
    this.showAdd();
    for (let x = 0; x < this.secondProcessRow.length; x++) {
      this.secondProcessRow[x].position = x;
    }
  }

  drop3(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.thirdProcessRow, event.previousIndex, event.currentIndex);
    this.showAdd();
    for (let x = 0; x < this.thirdProcessRow.length; x++) {
      this.thirdProcessRow[x].position = x;
    }
  }

  drop4(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fourthProcessRow, event.previousIndex, event.currentIndex);
    this.showAdd();
    for (let x = 0; x < this.fourthProcessRow.length; x++) {
      this.fourthProcessRow[x].position = x;
    }
  }

  drop5(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fifthProcessRow, event.previousIndex, event.currentIndex);
    this.showAdd();
    for (let x = 0; x < this.fifthProcessRow.length; x++) {
      this.fifthProcessRow[x].position = x;
    }
  }

  drop6(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sixthProcessRow, event.previousIndex, event.currentIndex);
    this.showAdd();
    for (let x = 0; x < this.sixthProcessRow.length; x++) {
      this.sixthProcessRow[x].position = x;
    }
  }


  async addNewProcess(newProcess: ProcessElement) {
    if (newProcess.name === undefined) {
      this.udpateProcess();
    } else {

      this.processServer.addProcessElement(newProcess, 'detail')
        .subscribe((data) => {
          console.log(data);
        });
      this.detailProcessList.push(newProcess);
      await this.getAllProcess();
    }
  }

  udpateProcess() {
    this.processServer.updateProcessList(this.detailProcessList, 'detail')
      .subscribe((data) => {
        console.log(data);
      });
  }

  async deleteProcessElement(id: number) {
    this.processServer.deleteProcess(id, 'detail')
      .subscribe((data) => {
        console.log(data);
      });
    await this.getAllProcess();
  }

}
