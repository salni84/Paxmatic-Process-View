import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Document} from '../app/model/document';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  private serverURL = environment.serverURL;


  constructor(private http: HttpClient) { }

  getDocumentsByParent(parent: string): Observable<any> {
    return this.http.get(this.serverURL + 'documents' + '/' + parent);
  }

  getDocumentsByCoreElement(core: string): Observable<any> {
    return this.http.get(this.serverURL + 'document' + '/' + core);
  }

  addDocument(document: Document) {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(document);
    return this.http.post(this.serverURL + 'documents/new', body, {headers});
  }

  deleteDocument(id: number): Observable<any> {
    return this.http.delete(this.serverURL + 'documents' + '/' + id);
  }
}
