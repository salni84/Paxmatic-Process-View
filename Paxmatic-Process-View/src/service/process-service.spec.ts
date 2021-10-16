import {getTestBed, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ProcessService} from './process-service';
import {ProcessMock} from '../app/model/process-mock';


describe('Process-Service', () => {

  let injector: TestBed;
  let service: ProcessService;
  let httpMock: HttpTestingController;
  const expectedBasicProcess = new ProcessMock().expectedBasicProcess;
  const expectedSubProcess = new ProcessMock().expectedSubProcess;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        ProcessService
      ],
    });

    injector = getTestBed();
    service = TestBed.inject(ProcessService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(service).toBeTruthy();
  });

  it(`should return all basic-process`, () => {
    service.getProcess('basic', '')
      .subscribe(data => {
        expect(data.length).toBe(3);
        expect(data).toBe(expectedBasicProcess);
      });

    const req = httpMock.expectOne('http://localhost:8080/basic/');
    expect(req.request.method).toBe('GET');
    req.flush(expectedBasicProcess);
  });

  it(`should return all sub-procces`, () => {
    service.getAllProcess('sub')
      .subscribe(data => {
        expect(data.length).toBe(3);
        expect(data).toBe(expectedSubProcess);
      });

    const req = httpMock.expectOne('http://localhost:8080/sub');
    expect(req.request.method).toBe('GET');
    req.flush(expectedSubProcess);
  });

  it(`should test DELETE-method`, () => {
    service.deleteProcess(1, 'basic')
      .subscribe(data => {
        expect(data.length).toBe(3);
        expect(data).toBe(expectedBasicProcess);
      });

    const req = httpMock.expectOne('http://localhost:8080/basic/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(expectedBasicProcess);
  });

  it(`should test PUT-method`, () => {
    service.updateProcessProperties(expectedBasicProcess, 'basic')
      .subscribe(data => {
        expect(data.length).toBe(3);
        expect(data).toBe(expectedBasicProcess);
      });

    const req = httpMock.expectOne('http://localhost:8080/basic');
    expect(req.request.method).toBe('PUT');
    req.flush(expectedBasicProcess);
  });

  it(`should test POST-method`, () => {
    service.addProcessElement(expectedBasicProcess[0], 'basic')
      .subscribe(data => {
        expect(data.length).toBe(3);
        expect(data).toBe(expectedBasicProcess);
      });

    const req = httpMock.expectOne('http://localhost:8080/basic/new');
    expect(req.request.method).toBe('POST');
    req.flush(expectedBasicProcess);
  });
});
