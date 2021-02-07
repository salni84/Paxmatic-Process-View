import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProcessService {

  private serverURL: string = 'http://localhost:8080/basic';


  constructor(private http: HttpClient) { }

  getProcess(): Observable<any> {
    return this.http.get(this.serverURL);
  }
}

