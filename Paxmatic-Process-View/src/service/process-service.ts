import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProcessElement} from '../app/model/process-element';

@Injectable({
  providedIn: 'root'
})

export class ProcessService {

  private serverURL = 'http://localhost:8080/basic';


  constructor(private http: HttpClient) { }

  getProcess(): Observable<any> {
    return this.http.get(this.serverURL);
  }

  deleteAll() {
    return this.http.delete(this.serverURL)
      .subscribe((data) => console.log('hallo'));
  }

  addProcessElement(process: ProcessElement[]): Promise<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(process);
    console.log(body)

    return this.http.post(this.serverURL + '/new', body, {headers}).toPromise();
  }

  updateProcessList(process: ProcessElement[]): Promise<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(process);
    console.log(body)

    return this.http.put(this.serverURL, body, {headers}).toPromise();

  }
}

