import { Component, OnInit } from '@angular/core';
import {ProcessService} from '../../service/process-service';
import {ProcessElement} from '../model/process-element';

@Component({
  selector: 'app-basic-process',
  templateUrl: './basic-process.component.html',
  styleUrls: ['./basic-process.component.scss']
})
export class BasicProcessComponent implements OnInit {

  constructor( private processServer: ProcessService) { }

  processList: ProcessElement[] = [];


  ngOnInit() {

    this.processServer.getProcess()
      .subscribe( process => {
        this.processList = process;
      });

  }
}
