import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {DepartmentsService} from '../../../service/departments.service';
import {Departments} from '../../model/departments';
import {LoginService} from '../../../service/login-service';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit {

  @Input() filteredColors: any;
  departmentlist: Departments[] = [];
  panelOpenState: false;
  isAdmin = false;


  constructor(private departmentService: DepartmentsService, private loginService: LoginService) { }


  ngOnInit(): void {
    this.getAllDepartments();

    this.loginService.getLoginStatus().subscribe((data) => {
      this.isAdmin = data;
    });
  }


  drop(event: CdkDragDrop<string[]>) {
    if (this.isAdmin) {
      moveItemInArray(this.departmentlist, event.previousIndex, event.currentIndex);
      for (let x = 0; x < this.departmentlist.length; x++) {
        this.departmentlist[x].position = x;
      }
      this.updateDepartment();
    }
  }

  getAllDepartments() {
    this.departmentService.getDepartments()
      .subscribe((data) => {
        this.departmentlist = data;
      });
  }

  updateDepartment() {
    this.departmentService.updateDepartments(this.departmentlist)
      .subscribe(() => {
        this.getAllDepartments();
      });
  }
}
