import {ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { BasicProcessComponent } from './basic-process.component';
import {ProcessService} from '../../../service/process-service';
import {of} from 'rxjs';
import {ProcessMock} from '../../model/process-mock';
import {DragDropModule} from "@angular/cdk/drag-drop";


describe('BasicProcessComponent', () => {
  let component: BasicProcessComponent;
  let fixture: ComponentFixture<BasicProcessComponent>;
  let element;
  let processService: ProcessService;
  const expectedProcess = new ProcessMock().expectedProcess;


  beforeEach( (() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProcessComponent ],
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
    fixture = TestBed.createComponent(BasicProcessComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should test header', () => {
    expect(element.querySelector('h2').innerText).toBe('Geschäftsprozesse');
  });


  it('should display basic-process-elements', fakeAsync(() => {
    spyOn(processService, 'getProcess').and.returnValue(of(expectedProcess));
    component.getAllProcess();

    tick();
    expect(component.basicProcessList.length).toEqual(2);
    expect(component.basicProcessList[0].name).toEqual('Projekt');
    expect(component.basicProcessList[1].name).toEqual('Administration');
  }));

  it('should ', function () {

  });


});
