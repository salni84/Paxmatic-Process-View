import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Departments} from '../../model/departments';
import {LegendService} from '../../../service/legend-service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {select, Store} from '@ngrx/store';
import {getCurrentDepartmentsSelector, getDepartments} from '../../store/selectors/departments.selector';
import {Observable} from 'rxjs';
import {logger} from "codelyzer/util/logger";



@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit {

  @Input() departmentName: any;
  @Input() departments: Departments[];
  @Input() parent;
  @Input() uuid;
  isAdmin = false;
  color: any[] = [];
  legends$: Observable<any>;
  departmentColor: any;

  constructor() {
  }

  ngOnInit(): void {
  }


}
