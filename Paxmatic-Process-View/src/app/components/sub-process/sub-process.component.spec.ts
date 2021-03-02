import {ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { SubProcessComponent } from './sub-process.component';
import {ProcessMock} from '../../model/process-mock';
import {of} from 'rxjs';
import {ProcessService} from '../../../service/process-service';

describe('SubProcessComponent', () => {
  let component: SubProcessComponent;
  let fixture: ComponentFixture<SubProcessComponent>;
  let element;
  const expectedProcess = new ProcessMock().expectedProcess;
  let processService: ProcessService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProcessComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule],
      providers: [{
        ProcessService,
        useValue: {getAllProcess: () => of(expectedProcess)}
      }]
    })
      .compileComponents();
  });

  beforeEach( inject([ProcessService], s => {
    processService = s;
    fixture = TestBed.createComponent(SubProcessComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should test header', () => {
    expect(element.querySelector('h2').innerText).toBe('Teilprozess /');
  });

  it('should display sub-process-elements', fakeAsync(() => {
    spyOn(processService, 'getProcess').and.returnValue(of(expectedProcess));
    component.getAllProcess();

    tick();
    expect(component.subProcessList.length).toEqual(2);
    expect(component.subProcessList[0].name).toEqual('Projekt');
    expect(component.subProcessList[1].name).toEqual('Administration');
  }));

});
