import {ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { DocumentsComponent } from './documents.component';
import {DocumentService} from '../../../service/document.service';
import {DocumentMock} from '../../model/document-mock';
import {of} from 'rxjs';


describe('DocumentComponent', () => {
  let component: DocumentsComponent;
  let fixture: ComponentFixture<DocumentsComponent>;
  let element;
  let documentService: DocumentService;
  const expectedDocuments = new DocumentMock().expectedDocuments;


  beforeEach( (() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule],
      providers: [{
        DocumentService,
        useValue: {getDocuments: () => of(expectedDocuments)}
      }]
    })
      .compileComponents();
  }));

  beforeEach( inject([DocumentService], s => {
    documentService = s;
    fixture = TestBed.createComponent(DocumentsComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));
});
