import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Document} from '../app/model/document';


@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  private serverURL = 'http://localhost:8080/';


  constructor(private http: HttpClient) { }

  getDocuments(parent: string): Observable<any> {
    return this.http.get(this.serverURL + 'document' + '/' + parent);
  }

  addDocument(document: Document) {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(document);
    return this.http.post(this.serverURL + 'documents/new', body, {headers});
  }

  updateDocument(document: Document[], level: string) {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(document);
    return this.http.put(this.serverURL + level, body, {headers});
  }

  deleteDocument(id: number): Observable<any> {
    return this.http.delete(this.serverURL + 'documents' + '/' + id);
  }
}
