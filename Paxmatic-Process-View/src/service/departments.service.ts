import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Departments} from '../app/model/departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private serverURL = environment.serverURL;

  constructor(private http: HttpClient) {
  }

  getDepartments(): Observable<any> {
    return this.http.get(this.serverURL + 'departments');
  }

  updateDepartments(department: Departments[]): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(department);
    return this.http.put(this.serverURL + 'departments', body, {headers});
  }
}
