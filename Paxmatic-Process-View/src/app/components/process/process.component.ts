import {Component, Input, OnInit} from '@angular/core';
import {ProcessElement} from '../../model/process-element';
import {ProcessService} from '../../../service/process-service';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../../../service/login-service';
import {Location} from '@angular/common';
import {DocumentService} from '../../../service/document.service';
import {Document} from '../../model/document';
import {LegendService} from '../../../service/legend-service';
import {select, State, Store} from '@ngrx/store';
import {Observable, pipe} from 'rxjs';
import {
  getBasicProcess,
  getChildProcessSelector,

} from '../../store/selectors/process.selector';
import {isLoggedIn} from '../../store/selectors/login.selector';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {map} from 'rxjs/operators';



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
  departments: any = [];
  loginStatus$: Observable<any>;
  processList$: Observable<ProcessElement[]>;
  processName = []



  constructor(private location: Location,
              private store: Store<{login: boolean}>,
              private store1: Store<{process: ProcessElement[]}>,
              private processStore: Store<any>,
              private processService: ProcessService,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private documentService: DocumentService,
              private legend: LegendService) {
    this.loginStatus$ = store.select(isLoggedIn);
  }


  ngOnInit() {
    console.log(this.breadcrumb)

    this.processList$ = this.store1.select(getBasicProcess);

    this.loginStatus$.subscribe((loginStatus) => {
     if (loginStatus) {
       this.isAdmin = true;
     } else {
       this.hideAllAddProcessComponent();
       this.isAdmin = false;
     }
    });
    this.getDepartments();
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
    this.processList$ = this.store1.select(getChildProcessSelector(uuid));
    this.processName.push(processName)
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


  getDepartments() {
    this.legend.getDepartments()
      .subscribe(data => {
        this.departments = data;
      });
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
    this.processList$ = this.store1.select(getChildProcessSelector(lastParent));
    this.processName.pop();
  }
}

