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

  ngOnInit() {
    this.parentId = this.route.snapshot.paramMap.get('detail');
    console.log(this.parentId)

    this.getAllProcess();

  }


  getAllProcess() {
    this.processServer.getProcess('detail', this.parentId)
      .subscribe((process) => {
        this.detailProcessList = process;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.detailProcessList, event.previousIndex, event.currentIndex);

    for (let x = 0; x < this.detailProcessList.length; x++) {

      this.detailProcessList[x].position = x;
    }
    console.log(this.detailProcessList);
  }


  addNewProcess(newProcess: ProcessElement) {

    if (newProcess.name === undefined) {
      this.udpateProcess();
    } else {

      this.processServer.addBasicProcessElement(newProcess, 'detail')
        .subscribe((data) => {
          console.log(data);
        });
      this.detailProcessList.push(newProcess);
      this.getAllProcess();
    }
  }

  udpateProcess() {
    this.processServer.updateBasicProcessList(this.detailProcessList, 'detail')
      .subscribe((data) => {
        console.log(data);
      });
  }

  async deleteProcessElement(id: number) {
    this.processServer.deleteBasicProcess(id, 'detail')
      .subscribe((data) => {
        console.log(data);
      });
    await this.getAllProcess();
  }

}
