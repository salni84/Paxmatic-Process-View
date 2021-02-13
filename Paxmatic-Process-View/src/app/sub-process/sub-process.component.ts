import {Component, Input, OnInit} from '@angular/core';
import {ProcessElement} from '../model/process-element';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ProcessService} from '../../service/process-service';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private processServer: ProcessService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.parentId = this.route.snapshot.paramMap.get('name');
    console.log(this.parentId)

    this.getAllProcess();

  }


  getAllProcess() {
    this.processServer.getProcess('sub', this.parentId)
      .subscribe((process) => {
        this.subProcessList = process;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.subProcessList, event.previousIndex, event.currentIndex);

    for (let x = 0; x < this.subProcessList.length; x++) {

      this.subProcessList[x].position = x;
    }
    console.log(this.subProcessList);
  }


  addNewProcess(newProcess: ProcessElement) {

    if (newProcess.name === undefined) {
      this.udpateProcess();
    } else {

      this.processServer.addProcessElement(newProcess, 'sub')
        .subscribe((data) => {
          console.log(data);
        });
      this.subProcessList.push(newProcess);
      this.getAllProcess();
    }
  }

  udpateProcess() {
    this.processServer.updateProcessList(this.subProcessList, 'sub')
      .subscribe((data) => {
        console.log(data);
      });
  }

  async deleteProcessElement(id: number) {
    this.processServer.deleteProcess(id, 'sub')
      .subscribe((data) => {
        console.log(data);
      });
    await this.getAllProcess();
  }



}
