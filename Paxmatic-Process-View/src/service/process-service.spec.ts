import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ProcessService } from './process-service';
import {HttpClient} from '@angular/common/http';
import {ProcessElement} from '../app/model/process-element';

describe('LoginServiceService', () => {
  let service: ProcessService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let process: ProcessElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProcessService]
    });

    service = TestBed.inject(ProcessService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProcess() should call http Get method for the given route', () => {
      process = {
        id: 1, name: 'Testprozess', color: 'red', isVisible: 1,
        form: 0, position: 1, visibleName: 'Test', order: 1, level: 'sub', parent: ' '
      };

      service.getProcess('detail', 'basic').subscribe((emp) => {
        expect(emp).toEqual(process);
      });

      const req = httpMock.expectOne('/');

      expect(req.request.method).toEqual('GET');
      req.flush(process);
      httpMock.verify();
    });
});
