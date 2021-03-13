import {ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { DetailProcessComponent } from './detail-process.component';
import {of} from 'rxjs';
import {ProcessMock} from '../../model/process-mock';
import {ProcessService} from '../../../service/process-service';

describe('DetailProcessComponent', () => {
  let component: DetailProcessComponent;
  let fixture: ComponentFixture<DetailProcessComponent>;
  let element;
  const expectedProcess = new ProcessMock().expectedProcess;
  let processService: ProcessService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProcessComponent ],
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
    fixture = TestBed.createComponent(DetailProcessComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should test header', () => {
    expect(element.querySelector('h2').innerText).toBe('Detailprozess /');
  });


  it('should display detail-process-elements', fakeAsync(() => {
    spyOn(processService, 'getProcess').and.returnValue(of(expectedProcess));
    component.getAllProcess();

    tick();
    expect(component.detailProcessList.length).toEqual(2);
    expect(component.detailProcessList[0].name).toEqual('Projekt');
    expect(component.detailProcessList[1].name).toEqual('Administration');
  }));
});
