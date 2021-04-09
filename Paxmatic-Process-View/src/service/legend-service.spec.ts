import {LegendService} from './legend-service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {getTestBed, TestBed} from '@angular/core/testing';


describe('Legend-Service', () => {

  let injector: TestBed;
  let service: LegendService;
  let httpMock: HttpTestingController;
  const expectedDepartments = [{
    name: 'Reinigung',
    color: 'blue'
  },
    {
      name: 'Hauptprozess',
      color: 'green'
    }];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        LegendService
      ],
    });

    injector = getTestBed();
    service = TestBed.inject(LegendService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(service).toBeTruthy();
  });

  it(`should return all departments`, () => {
    service.getDepartments()
      .subscribe(data => {
        expect(data).toBe(expectedDepartments);
      });

    const req = httpMock.expectOne('http://localhost:8080/departments');
    expect(req.request.method).toBe('GET');
    req.flush(expectedDepartments);
  });

  it(`should test PUT-Department-method`, () => {
    service.updateDepartments(expectedDepartments)
      .subscribe(data => {
        expect(data).toBe(expectedDepartments);
      });

    const req = httpMock.expectOne('http://localhost:8080/departments');
    expect(req.request.method).toBe('PUT');
    req.flush(expectedDepartments);
  });

  it(`should test POST-Department-method`, () => {
    service.createDepartment(expectedDepartments[0])
      .subscribe(data => {
        expect(data).toBe(expectedDepartments);
      });

    const req = httpMock.expectOne('http://localhost:8080/departments/new');
    expect(req.request.method).toBe('POST');
    req.flush(expectedDepartments);
  });

  it(`should test DELETE-Department-method`, () => {
    service.deleteDepartment(1)
      .subscribe(data => {
        expect(data).toBe(expectedDepartments);
      });

    const req = httpMock.expectOne('http://localhost:8080/departments/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(expectedDepartments);
  });
});
