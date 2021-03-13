import { Component, OnInit } from '@angular/core';
import {ProcessService} from '../../../service/process-service';
import {ProcessElement} from '../../model/process-element';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




  constructor(private processService: ProcessService) { }


  ngOnInit(): void {}


}
