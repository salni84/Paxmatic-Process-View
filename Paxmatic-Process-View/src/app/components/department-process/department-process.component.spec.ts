import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { DepartmentProcessComponent } from './department-process.component';
import {of} from 'rxjs';
import {ProcessService} from '../../../service/process-service';
import {ProcessMock} from '../../model/process-mock';

describe('DepartmentProcessComponent', () => {
  let component: DepartmentProcessComponent;
  let fixture: ComponentFixture<DepartmentProcessComponent>;
  let element;
  const expectedProcess = new ProcessMock().expectedProcess;
  let processService: ProcessService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentProcessComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule],
      providers: [{
        ProcessService,
        useValue: {getAllProcess: () => of(expectedProcess)}
      }]
    })
      .compileComponents();
  }));

  beforeEach( inject([ProcessService], s => {
    processService = s;
    fixture = TestBed.createComponent(DepartmentProcessComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should test header', () => {
    expect(element.querySelector('h2').innerText).toBe('Abteilungsprozess /');
  });


  it('should test drop-function for department-process',  () => {
    component.departmentProcessList = expectedProcess;
    const fakeEvent = processService.createEvent(1, 2);
    component.drop(fakeEvent);
    expect(component.departmentProcessList.length).toBe(3);
    expect(component.departmentProcessList[0].position).toBe(0);
    expect(component.departmentProcessList[1].position).toBe(1);
    expect(component.departmentProcessList[2].position).toBe(2);
  });
});
