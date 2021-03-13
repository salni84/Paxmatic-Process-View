import {ProcessService} from './process-service';
import {ProcessElement} from '../app/model/process-element';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';


describe('ProcessService', () => {
  let service: ProcessService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let process: ProcessElement;
  let processArray: ProcessElement [];


  // Arrange
  process = {
    id: 1, name: 'Testprozess', color: 'red', isVisible: 1,
    form: 0, position: 1, visibleName: 'Test', order: 1, level: 'sub', parent: ' '
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProcessService]
    });

    service = TestBed.inject(ProcessService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });


  it('getProcess() should call http Get method for the given route', () => {

      // Act
      service.getProcess('detail', 'basic').subscribe((emp) => {
        // Assert 1 This Verify the observable when it resolves, its result matches test data.
        expect(emp).toEqual(process);
      });
      // Assert 2 Verify the matched URL get called in the GET API else it throws errors.
      const req = httpMock.expectOne('http://localhost:8080/detail/basic');

      // Assert 3 Verify that the request called is GET HTTP method only.
      expect(req.request.method).toEqual('GET');
      // Assert 4 Ensures the correct data was returned using Subscribe callback.
      req.flush(process);
      // Assert 5 Ensures that all request are fulfilled and there are no outstanding requests.
      httpMock.verify();
    });

  it('deleteProcess() should call http delete for the given route',  () => {

    service.deleteProcess(1, 'detail').subscribe((emp) => {
      expect(emp).toEqual(process);
    });

    const req = httpMock.expectOne('http://localhost:8080/detail/1');

    expect(req.request.method).toEqual('DELETE');
    req.flush(process);
    httpMock.verify();
  });

  it('updateProcess() should call http put for the given route',  () => {

    service.updateProcessList(processArray, 'detail').subscribe((emp) => {
      expect(emp).toEqual(process);
    });

    const req = httpMock.expectOne('http://localhost:8080/detail');

    expect(req.request.method).toEqual('PUT');
    req.flush(process);
    httpMock.verify();
  });

  it('addProcessElement() should call http post for the given route',  () => {

    service.addProcessElement(process, 'detail').subscribe((emp) => {
      expect(emp).toEqual(process);
    });

    const req = httpMock.expectOne('http://localhost:8080/detail/new');

    expect(req.request.method).toEqual('POST');
    req.flush(process);
    httpMock.verify();
  });
});
