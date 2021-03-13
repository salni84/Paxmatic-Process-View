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

  it('should display department-process-elements', fakeAsync(() => {
    spyOn(processService, 'getProcess').and.returnValue(of(expectedProcess));
    component.getAllProcess();

    tick();
    expect(component.departmentProcessList.length).toEqual(2);
    expect(component.departmentProcessList[0].name).toEqual('Projekt');
    expect(component.departmentProcessList[1].name).toEqual('Administration');
  }));
});
