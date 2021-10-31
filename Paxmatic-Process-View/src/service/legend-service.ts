import {Injectable} from '@angular/core';
import {Departments} from '../app/model/departments';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LegendService {

  private serverURL = 'https://spring-boot-server-pax.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  getDepartments(): Observable<any> {
    return this.http.get(this.serverURL + 'departments/all');
  }

  updateDepartments(departments: Departments[]) {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(departments);
    return this.http.put(this.serverURL + 'updateDepartment', body, {headers});
  }

  createDepartment(department): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(department);
    return this.http.post(this.serverURL + 'newDepartment', body, {headers});
  }

  deleteDepartment(id): Observable<any> {
    const body = JSON.stringify(id);
    return this.http.delete(this.serverURL + 'deleteDepartment' + '/' + body);
  }
}
