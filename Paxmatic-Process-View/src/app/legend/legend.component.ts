import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {ProcessService} from '../../service/process-service';
import {LoginService} from '../../service/login-service';
import {Departments} from '../model/departments';
import {LegendService} from "../../service/legend-service";


@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  departmentlist: any = [];
  panelOpenState = false;
  isAdmin = false;
  color: any[] = [];
  department: Departments = { name: 'Abteilung', color: 'white'};

  constructor(private legend: LegendService,
              private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.getLegend();
    this.loginService.getLoginStatus().subscribe((data) => {
      this.isAdmin = data;
    });
  }

  getLegend() {
    this.legend.getDepartments()
      .subscribe( data => {
        this.departmentlist = data;
        console.log(this.departmentlist)
      });
  }

  updateDepartments() {
    this.legend.updateDepartments(this.departmentlist)
      .subscribe(() => {
        this.legend.getDepartments();
      });
  }

  newDepartment() {
    this.legend.createDepartment(this.department)
      .subscribe(() => {
        this.getLegend();
      });
    this.departmentlist.push(this.department);
  }

  deleteDepartment(id: number){
    this.legend.deleteDepartment(id)
      .subscribe(() => {
        this.getLegend();
      });
  }
}
