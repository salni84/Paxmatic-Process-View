import {getTestBed, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DocumentService} from './document.service';
import {DocumentMock} from '../app/model/document-mock';


describe('Document-Service', () => {

  let injector: TestBed;
  let service: DocumentService;
  let httpMock: HttpTestingController;
  const expectedDocuments = new DocumentMock().expectedDocuments;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        DocumentService
      ],
    });

    injector = getTestBed();
    service = TestBed.inject(DocumentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(service).toBeTruthy();
  });

  it(`should return all documents related to parentId`, () => {
    service.getDocumentsByParent('Projekt')
      .subscribe(data => {
        expect(data.length).toBe(2);
        expect(data).toBe(expectedDocuments);
      });

    const req = httpMock.expectOne('http://localhost:8080/documents/Projekt');
    expect(req.request.method).toBe('GET');
    req.flush(expectedDocuments);
  });

  it(`should return all documents related to coreElement`, () => {
    service.getDocumentsByCoreElement('Service')
      .subscribe(data => {
        expect(data.length).toBe(2);
        expect(data).toBe(expectedDocuments);
      });

    const req = httpMock.expectOne('http://localhost:8080/document/Service');
    expect(req.request.method).toBe('GET');
    req.flush(expectedDocuments);
  });

  it(`should test POST-Document-method`, () => {
    service.addDocument(expectedDocuments[0])
      .subscribe(data => {
        expect(data).toBe(expectedDocuments);
      });

    const req = httpMock.expectOne('http://localhost:8080/documents/new');
    expect(req.request.method).toBe('POST');
    req.flush(expectedDocuments);
  });

  it(`should test DELETE-Document-method`, () => {
    service.deleteDocument(1)
      .subscribe(data => {
        expect(data).toBe(expectedDocuments);
      });

    const req = httpMock.expectOne('http://localhost:8080/documents/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(expectedDocuments);
  });
});
