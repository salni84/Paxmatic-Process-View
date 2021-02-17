import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ProcessElement} from '../model/process-element';
import {ProcessService} from '../../service/process-service';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from "../../service/login-service";

@Component({
  selector: 'app-detail-process',
  templateUrl: './detail-process.component.html',
  styleUrls: ['./detail-process.component.scss']
})
export class DetailProcessComponent implements OnInit {

  constructor(private processServer: ProcessService, private route: ActivatedRoute, private loginService: LoginService) { }

  @Input() newProcess: ProcessElement;

  detailProcessList: ProcessElement[] = [];
  parentId: string;
  level = 'detail';
  showCreateElement = false;
  hideCreateElement = false;
  showAddButton = true;
  isAdmin = false;
  firstProcessRow: ProcessElement[] = [];
  secondProcessRow: ProcessElement[] = [];
  thirdProcessRow: ProcessElement[] = [];
  fourthProcessRow: ProcessElement[] = [];
  fifthProcessRow: ProcessElement[] = [];
  sixthProcessRow: ProcessElement[] = [];
  seventhProcessRow: ProcessElement[] = [];
  eighthProcessRow: ProcessElement[] = [];

  ngOnInit() {
    this.loginService.getLoginStatus().subscribe((data) => {
      if (data) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
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

  hasPermission(showAdmin: boolean) {
    this.isAdmin = showAdmin;
  }


  getAllProcess() {
    this.firstProcessRow = [];
    this.secondProcessRow = [];
    this.thirdProcessRow = [];
    this.fourthProcessRow = [];
    this.fifthProcessRow = [];
    this.sixthProcessRow = [];
    this.seventhProcessRow = [];
    this.eighthProcessRow = [];
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
          if (data.order === 7) {
            this.seventhProcessRow.push(data);
          }
          if (data.order === 8) {
            this.eighthProcessRow.push(data);
          }
      });
    });
  }

  drop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.firstProcessRow, event.previousIndex, event.currentIndex);
    for (let x = 0; x < this.firstProcessRow.length; x++) {
      this.firstProcessRow[x].position = x;
    }
    this.udpateProcess();
  }

  drop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.secondProcessRow, event.previousIndex, event.currentIndex);
    for (let x = 0; x < this.secondProcessRow.length; x++) {
      this.secondProcessRow[x].position = x;
    }
    this.udpateProcess();
  }

  drop3(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.thirdProcessRow, event.previousIndex, event.currentIndex);
    for (let x = 0; x < this.thirdProcessRow.length; x++) {
      this.thirdProcessRow[x].position = x;
    }
    this.udpateProcess();
  }

  drop4(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fourthProcessRow, event.previousIndex, event.currentIndex);
    for (let x = 0; x < this.fourthProcessRow.length; x++) {
      this.fourthProcessRow[x].position = x;
    }
    this.udpateProcess();
  }

  drop5(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fifthProcessRow, event.previousIndex, event.currentIndex);
    for (let x = 0; x < this.fifthProcessRow.length; x++) {
      this.fifthProcessRow[x].position = x;
    }
    this.udpateProcess();
  }

  drop6(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sixthProcessRow, event.previousIndex, event.currentIndex);
    for (let x = 0; x < this.sixthProcessRow.length; x++) {
      this.sixthProcessRow[x].position = x;
    }
    this.udpateProcess();
  }

  drop7(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.seventhProcessRow, event.previousIndex, event.currentIndex);
    for (let x = 0; x < this.seventhProcessRow.length; x++) {
      this.seventhProcessRow[x].position = x;
    }
    this.udpateProcess();
  }

  drop8(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.eighthProcessRow, event.previousIndex, event.currentIndex);
    for (let x = 0; x < this.eighthProcessRow.length; x++) {
      this.eighthProcessRow[x].position = x;
    }
    this.udpateProcess();
  }


  addNewProcess(newProcess: ProcessElement) {
    this.processServer.addProcessElement(newProcess, 'detail')
        .subscribe(() => {
          this.getAllProcess();
        });
    this.detailProcessList.push(newProcess);
  }

  udpateProcess() {
    this.processServer.updateProcessList(this.detailProcessList, 'detail')
      .subscribe(() => {
        this.getAllProcess();
      });
  }

  deleteProcessElement(id: number) {
    this.processServer.deleteProcess(id, 'detail')
      .subscribe(() => {
        this.getAllProcess();
      });
  }
}
