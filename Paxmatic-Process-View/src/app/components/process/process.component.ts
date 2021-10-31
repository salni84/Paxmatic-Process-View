import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProcessElement} from '../../model/process-element';
import {ProcessService} from '../../../service/process-service';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../../../service/login-service';
import {Location} from '@angular/common';
import {DocumentService} from '../../../service/document.service';
import {Document} from '../../model/document';
import {LegendService} from '../../../service/legend-service';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
  getBasicProcess,
  getChildProcessSelector,

} from '../../store/selectors/process.selector';
import {isLoggedIn} from '../../store/selectors/login.selector';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {map} from 'rxjs/operators';
import {Departments} from '../../model/departments';
import {
  getCurrentDepartmentsSelector,
} from '../../store/selectors/departments.selector';



@Component({
  selector: 'app-detail-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  @Input() newProcess: ProcessElement;
  level = 1;
  uuid: number;
  parent = 0;
  breadcrumb = [];
  showCreateElement: boolean[] = [false, false, false, false, false, false, false, false];
  hideCreateElement: boolean[] = [false, false, false, false, false, false, false, false];
  showAddButton: boolean[] = [true, true, true, true, true, true, true, true];
  isAdmin = false;
  matchDocs: Document[] = [];
  matchNames: string[] = [];
  departments: Departments[] = [];
  legends$: Observable<any>;
  loginStatus$: Observable<any>;
  processList$: Observable<ProcessElement[]>;
  processName = [];
  backgroundColorRow1 = 'lightgreen';
  backgroundColorRow2 = 'lightgreen';
  backgroundColorRow3 = 'lightgreen';
  backgroundColorRow4 = 'lightgreen';
  backgroundColorRow5 = 'lightgreen';
  backgroundColorRow6 = 'lightgreen';
  backgroundColorRow7 = 'lightgreen';
  backgroundColorRow8 = 'lightgreen';

  constructor(private location: Location,
              private store: Store,
              private processService: ProcessService,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private documentService: DocumentService,
              private legendService: LegendService,
              private legend: LegendService
  ) {
    this.loginStatus$ = store.select(isLoggedIn);
  }


  ngOnInit() {
    this.processList$ = this.store.select(getBasicProcess);
    this.loginStatus$.subscribe((loginStatus) => {
     if (loginStatus) {
       this.isAdmin = true;
     } else {
       this.hideAllAddProcessComponent();
       this.isAdmin = false;
     }
    });
  }

  showAddProcessComponent(id: number) {
    this.showCreateElement[id] = true;
    this.hideCreateElement[id] = true;
    this.showAddButton[id] = false;
  }

  hideAddProcessComponent(id: number) {
    this.showCreateElement[id] = false;
    this.showAddButton[id] = true;
    this.hideCreateElement[id] = false;
  }

  hideAllAddProcessComponent() {
    this.showCreateElement.fill(false);
    this.hideCreateElement.fill(false);
    this.showAddButton.fill(true);
  }

  getChildProcess(processName: string, parent?: number, uuid?: number, ) {
   this.breadcrumb.push(parent);
   this.parent = uuid;
   this.loginStatus$ = this.store.select(isLoggedIn);
   this.processList$ = this.store.select(getChildProcessSelector(uuid));
   this.legends$ = this.store.select(getCurrentDepartmentsSelector(uuid));


   this.legends$.subscribe((data) => {
     this.departments = [];
     data.forEach((x) => {
       this.departments.push(x);
     });

     this.updateColors(this.departments);
     this.processName.push(processName);
   });
  }


  addNewProcess(newProcess: ProcessElement) {
    this.store.dispatch({type: '[Process] addNewProcess', payload: newProcess});
  }


  udpateProcess(processElement: any) {
    this.store.dispatch({ type: '[Process] updateProcess', payload: processElement });
  }

  udpateProcessOrder(processElement: any) {
    this.store.dispatch({ type: '[Process] updateProcessOrder', payload: processElement });
  }

  deleteProcessElement(id: number) {
    this.store.dispatch({type: '[Process] deleteProcess', payload: id});
  }

  drop1(event: CdkDragDrop<string[]>) {
   if (this.isAdmin) {

     const firstList: any = [];
     this.processList$.pipe(map((data) =>
       data.filter((process) => process.verticalorder === 1))).subscribe((pro) => firstList.push(pro));

     moveItemInArray(firstList[0], event.previousIndex, event.currentIndex);
     for (let x = 0; x < firstList[0].length; x++) {
       firstList[0][x].position = x;
     }
     this.udpateProcessOrder(firstList[0]);
   }
 }

   drop2(event: CdkDragDrop<string[]>) {
     if (this.isAdmin) {

       const secondList: any = [];
       this.processList$.pipe(map((data) =>
         data.filter((process) => process.verticalorder === 2))).subscribe((pro) => secondList.push(pro));

       moveItemInArray(secondList[0], event.previousIndex, event.currentIndex);
       for (let x = 0; x < secondList[0].length; x++) {
         secondList[0][x].position = x;
       }
       this.udpateProcessOrder(secondList[0]);
     }
   }

   drop3(event: CdkDragDrop<string[]>) {
     if (this.isAdmin) {

       const thirdList: any = [];
       this.processList$.pipe(map((data) =>
         data.filter((process) => process.verticalorder === 3))).subscribe((pro) => thirdList.push(pro));

       moveItemInArray(thirdList[0], event.previousIndex, event.currentIndex);
       for (let x = 0; x < thirdList[0].length; x++) {
         thirdList[0][x].position = x;
       }
       this.udpateProcessOrder(thirdList[0]);
     }
   }

   drop4(event: CdkDragDrop<string[]>) {
     if (this.isAdmin) {

       const forthList: any = [];
       this.processList$.pipe(map((data) =>
         data.filter((process) => process.verticalorder === 4))).subscribe((pro) => forthList.push(pro));

       moveItemInArray(forthList[0], event.previousIndex, event.currentIndex);
       for (let x = 0; x < forthList[0].length; x++) {
         forthList[0][x].position = x;
       }
       this.udpateProcessOrder(forthList[0]);
     }
   }

   drop5(event: CdkDragDrop<string[]>) {
     if (this.isAdmin) {

       const fifthList: any = [];
       this.processList$.pipe(map((data) =>
         data.filter((process) => process.verticalorder === 5))).subscribe((pro) => fifthList.push(pro));

       moveItemInArray(fifthList[0], event.previousIndex, event.currentIndex);
       for (let x = 0; x < fifthList[0].length; x++) {
         fifthList[0][x].position = x;
       }
       this.udpateProcessOrder(fifthList[0]);
     }
   }

   drop6(event: CdkDragDrop<string[]>) {
     if (this.isAdmin) {

       const sixtList: any = [];
       this.processList$.pipe(map((data) =>
         data.filter((process) => process.verticalorder === 6))).subscribe((pro) => sixtList.push(pro));

       moveItemInArray(sixtList[0], event.previousIndex, event.currentIndex);
       for (let x = 0; x < sixtList[0].length; x++) {
         sixtList[0][x].position = x;
       }
       this.udpateProcessOrder(sixtList[0]);
     }
   }

   drop7(event: CdkDragDrop<string[]>) {
     if (this.isAdmin) {

       const seventhList: any = [];
       this.processList$.pipe(map((data) =>
         data.filter((process) => process.verticalorder === 7))).subscribe((pro) => seventhList.push(pro));

       moveItemInArray(seventhList[0], event.previousIndex, event.currentIndex);
       for (let x = 0; x < seventhList[0].length; x++) {
         seventhList[0][x].position = x;
       }
       this.udpateProcessOrder(seventhList[0]);
     }
   }

   drop8(event: CdkDragDrop<string[]>) {
     if (this.isAdmin) {

       const eightList: any = [];
       this.processList$.pipe(map((data) =>
         data.filter((process) => process.verticalorder === 8))).subscribe((pro) => eightList.push(pro));

       moveItemInArray(eightList[0], event.previousIndex, event.currentIndex);
       for (let x = 0; x < eightList[0].length; x++) {
         eightList[0][x].position = x;
       }
       this.udpateProcessOrder(eightList[0]);
     }
   }




  showDocuments(data) {
/*    this.documentService.getDocumentsByParent(this.parentId)
      .pipe(
        map(docs => docs.filter(doc => doc.name = this.parentId)))
      .subscribe((i) => {
        this.matchDocs = i;
        this.matchDocs.forEach(info => this.matchNames.push(info.coreElement));
        if (this.matchNames.includes(data.name)) {
          data.hasDocument = true;
        }
      });*/
  }


  navigateBack() {
    const lastParent = this.breadcrumb.pop();
    this.processList$ = this.store.select(getChildProcessSelector(lastParent));
    this.processName.pop();
    this.departments.pop();
  }


  updateDepartments(departments: Departments[]) {
  this.legend.updateDepartments(departments)
    .subscribe(() => {
      this.getDepartments();
    });
}

  addNewDepartment() {
  const newDep = {
    departmentname: 'Placeholder',
    color: 'grey',
    verticalorder: 1,
    parent: this.parent,
  };
  this.legend.createDepartment(newDep)
    .subscribe(() => this.getDepartments());
}


  deleteDepartment(id: number) {
  this.legend.deleteDepartment(id)
    .subscribe(() => this.getDepartments());
}

  getDepartments() {
  this.legend.getDepartments()
    .subscribe((data) => this.departments = data)
}


  drop(event: CdkDragDrop<string[]>) {

  // if (this.isAdmin) {
  moveItemInArray(this.departments, event.previousIndex, event.currentIndex);
  for (let x = 0; x < this.departments.length; x++) {
    this.departments[x].verticalorder = x;
  }
  this.updateDepartments(this.departments);
  this.processList$ = this.store.select(getChildProcessSelector(this.parent));
  this.updateColors(this.departments)
}

updateColors(departments){
  this.departments.forEach(item => {

  if (departments[0].verticalorder === 0) {
    this.backgroundColorRow1 = departments[0].color;
  }
  if (departments[1].verticalorder === 1) {
    this.backgroundColorRow2 = departments[1].color;
  }
  if (departments[2].verticalorder === 2) {
    this.backgroundColorRow3 = departments[2].color;
  }
  if (departments[3].verticalorder === 3) {
    this.backgroundColorRow4 = departments[3].color;
  }
  if (departments[4].verticalorder === 4) {
    this.backgroundColorRow5 = departments[4].color;
  }
  if (departments[5].verticalorder === 5) {
    this.backgroundColorRow6 = departments[5].color;
  }
  if (departments[6].verticalorder === 6) {
    this.backgroundColorRow7 = departments[6].color;
  }
  if (departments[7].verticalorder === 7) {
    this.backgroundColorRow8 = departments[7].color;
  }
});

}
}
