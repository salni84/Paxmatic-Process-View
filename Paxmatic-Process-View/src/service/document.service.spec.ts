import { DocumentService } from './document.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {Document} from '../app/model/document';

describe('DocumentService', () => {
  let service: DocumentService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let document: Document;


  // Arrange
  document = { link: '/projekte/test.txt', name: 'testdocument', description: 'testdescription', nr: 1, parent: 'projekt'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DocumentService]
    });

    service = TestBed.inject(DocumentService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });


  it('getDocumemnts() should call http Get method for the given route', () => {

    // Act
    service.getDocuments('projekt').subscribe((emp) => {
      // Assert 1 This Verify the observable when it resolves, its result matches test data.
      expect(emp).toEqual(document);
    });
    // Assert 2 Verify the matched URL get called in the GET API else it throws errors.
    const req = httpMock.expectOne('http://localhost:8080/documents/projekt');

    // Assert 3 Verify that the request called is GET HTTP method only.
    expect(req.request.method).toEqual('GET');
    // Assert 4 Ensures the correct data was returned using Subscribe callback.
    req.flush(document);
    // Assert 5 Ensures that all request are fulfilled and there are no outstanding requests.
    httpMock.verify();
  });

  it('deleteDocument() should call http delete for the given route',  () => {

    service.deleteDocument(1).subscribe((emp) => {
      expect(emp).toEqual(document);
    });

    const req = httpMock.expectOne('http://localhost:8080/documents/1');

    expect(req.request.method).toEqual('DELETE');
    req.flush(document);
    httpMock.verify();
  });

  it('addDocument() should call http post for the given route',  () => {

    service.addDocument(document).subscribe((emp) => {
      expect(emp).toEqual(document);
    });

    const req = httpMock.expectOne('http://localhost:8080/documents/new');

    expect(req.request.method).toEqual('POST');
    req.flush(document);
    httpMock.verify();
  });
});
