import {ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { BasicProcessComponent } from './basic-process.component';
import {ProcessService} from '../../../service/process-service';
import {of} from 'rxjs';
import {ProcessMock} from '../../model/process-mock';
import {MatDialogModule} from '@angular/material/dialog';



describe('BasicProcessComponent', () => {
  let component: BasicProcessComponent;
  let fixture: ComponentFixture<BasicProcessComponent>;
  let element;
  let processService: ProcessService;
  const expectedProcess = new ProcessMock().expectedProcess;
  let httpMock: HttpTestingController;


  beforeEach( (() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProcessComponent ],
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
    processService = TestBed.inject(ProcessService);
    fixture = TestBed.createComponent(BasicProcessComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    httpMock = TestBed.inject((HttpTestingController));
  }));


  it('should call service with the right payload',  (done: DoneFn) => {
    processService
      .addProcessElement({
        id: 1,
        level: 'basic',
        name: 'test',
        color: 'green',
        form: 0,
        position: 0,
        parent: null,
        order: null,
        isVisible: 1,
        visibleName: 'test',
        isStart: null
      }, 'basic')
      .subscribe(() => {
        done();
         });

    const req = httpMock.expectOne({method: 'POST'});
    const req2 = httpMock.expectOne({method: 'GET'})
    req.flush({});
    req2.flush({});
    httpMock.verify();

    const requestBody = req.request.body;
    expect(requestBody).toBeDefined();
    expect(requestBody.color).toBe('green');
    expect(requestBody.level).toBe('basic');
    expect(requestBody.name).toBe('test');
  });


  it('should test header', () => {
    expect(element.querySelector('h2').innerText).toBe('Geschäftsprozesse');
  });


  it('should test drop-function for basic-process',  () => {
    component.basicProcessList = expectedProcess;
    component.isAdmin = true;
    const fakeEvent = processService.createEvent(0, 2);
    component.drop(fakeEvent);

    expect(component.basicProcessList.length).toBe(3);
    expect(component.basicProcessList[0].position).toBe(0);
    expect(component.basicProcessList[1].position).toBe(1);
    expect(component.basicProcessList[2].position).toBe(2);
  });
});
