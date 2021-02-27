import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { BasicProcessComponent } from './basic-process.component';
import {ProcessService} from '../../service/process-service';
import {ProcessElement} from '../model/process-element';
import {of} from 'rxjs';


describe('BasicProcessComponent', () => {
  let component: BasicProcessComponent;
  let fixture: ComponentFixture<BasicProcessComponent>;
  let element;
  let processService;


  beforeEach( (() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProcessComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule],
      providers: [ProcessService]
    })
    .compileComponents();
  }));

  beforeEach((inject([ProcessService], s => {
    processService = s;
    fixture = TestBed.createComponent(BasicProcessComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  })));

  it('should test header', () => {
    expect(element.querySelector('h2').innerText).toBe('Geschäftsprozesse');
  });


  it('getProcess() should call getProcess for the given route', (() => {
    const response: ProcessElement[] = [];
    spyOn(processService, 'getProcess').and.returnValue(of(response));
    component.getAllProcess();
    fixture.detectChanges();
    expect(component.basicProcessList).toEqual(response);
  }));

});
