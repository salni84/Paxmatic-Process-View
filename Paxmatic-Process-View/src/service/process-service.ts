import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProcessElement} from '../app/model/process-element';


@Injectable({
  providedIn: 'root'
})

export class ProcessService {

  private serverURL = 'http://localhost:8080/';


  constructor(private http: HttpClient) { }

  getProcess(level: string, parent: string): Observable<any> {
    return this.http.get(this.serverURL + level + '/' + parent);
  }


  addBasicProcessElement(process: ProcessElement, level: string) {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(process);

    return this.http.post(this.serverURL + level + '/new', body, {headers});
  }

  updateBasicProcessList(process: ProcessElement[], level: string) {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(process);
    console.log(body);

    return this.http.put(this.serverURL + level, body, {headers});
  }

  deleteBasicProcess(id: number, level: string) {
    return this.http.delete(this.serverURL + level + '/' + id);
  }
}

