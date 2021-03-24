import {Component, Input, OnInit} from '@angular/core';
import {ProcessElement} from '../../model/process-element';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ProcessService} from '../../../service/process-service';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../../../service/login-service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sub-process',
  templateUrl: './sub-process.component.html',
  styleUrls: ['./sub-process.component.scss']
})
export class SubProcessComponent implements OnInit {

  @Input() newProcess: ProcessElement;

  subProcessList: ProcessElement[] = [];
  parentId: string;
  level = 'sub';
  showCreateElement = false;
  hideCreateElement = false;
  showAddButton = true;
  isAdmin = false;


  constructor(private location: Location,
              private processServer: ProcessService,
              private route: ActivatedRoute,
              private loginService: LoginService) { }


  ngOnInit() {
    this.parentId = this.route.snapshot.paramMap.get('name');
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
    this.processServer.getProcess('sub', this.parentId)
      .subscribe((process) => {
        this.subProcessList = process;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.isAdmin) {
      moveItemInArray(this.subProcessList, event.previousIndex, event.currentIndex);

      for (let x = 0; x < this.subProcessList.length; x++) {

        this.subProcessList[x].position = x;
      }
      this.udpateProcess();
    }
  }


  addNewProcess(newProcess: ProcessElement) {
      this.processServer.addProcessElement(newProcess, 'sub')
        .subscribe(() => {
          this.getAllProcess();
        });
      this.subProcessList.push(newProcess);
  }

  udpateProcess() {
    this.processServer.updateProcessList(this.subProcessList, 'sub')
      .subscribe(() => {
        this.getAllProcess();
      });
  }

  deleteProcessElement(id: number) {
    this.processServer.deleteProcess(id, 'sub')
      .subscribe(() => {
        this.getAllProcess();
      });
  }
}
