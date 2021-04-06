import {ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { SubProcessComponent } from './sub-process.component';
import {ProcessMock} from '../../model/process-mock';
import {of} from 'rxjs';
import {ProcessService} from '../../../service/process-service';
import {MatDialogModule} from '@angular/material/dialog';


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
        RouterTestingModule,
        MatDialogModule],
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

  it('should test drop-function for sub-process',  () => {
    component.subProcessList = expectedProcess;
    component.isAdmin = true;
    const fakeEvent = processService.createEvent(1, 2);
    component.drop(fakeEvent);
    expect(component.subProcessList.length).toBe(3);
    expect(component.subProcessList[0].position).toBe(0);
    expect(component.subProcessList[1].position).toBe(1);
    expect(component.subProcessList[2].position).toBe(2);
  });
});
