import {ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { ProcessComponent } from './process.component';
import {of} from 'rxjs';
import {ProcessMock} from '../../model/process-mock';
import {ProcessService} from '../../../service/process-service';
import {MatDialogModule} from '@angular/material/dialog';


describe('DetailProcessComponent', () => {
  let component: ProcessComponent;
  let fixture: ComponentFixture<ProcessComponent>;
  let element;
  const expectedProcess = new ProcessMock().expectedBasicProcess;
  let processService: ProcessService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessComponent ],
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
  }));

  beforeEach( inject([ProcessService], s => {
    processService = s;
    fixture = TestBed.createComponent(ProcessComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should test header', () => {
    expect(element.querySelector('h2').innerText).toBe('Detailprozess');
  });


  it('should test drop-function for detail-process',  () => {
    component.firstProcessRow = expectedProcess;
    component.isAdmin = true;
    const fakeEvent = processService.createEvent(1, 2);
    component.drop1(fakeEvent);
    expect(component.firstProcessRow.length).toBe(3);
    expect(component.firstProcessRow[0].position).toBe(0);
    expect(component.firstProcessRow[1].position).toBe(1);
    expect(component.firstProcessRow[2].position).toBe(2);
  });
});
