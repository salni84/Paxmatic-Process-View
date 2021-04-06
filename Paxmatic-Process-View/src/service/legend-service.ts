import {Injectable} from '@angular/core';
import {Departments} from '../app/model/departments';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class LegendService {

  private serverURL = environment.serverURL;

  constructor(private http: HttpClient) { }

  getDepartments() {
    return this.http.get(this.serverURL + 'departments');
  }

  updateDepartments(departments: Departments[]) {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(departments);
    return this.http.put(this.serverURL + 'departments', body, {headers});
  }

  createDepartment(department: Departments): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(department);
    return this.http.post(this.serverURL + 'departments' + '/' + 'new', body, {headers});
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(this.serverURL + 'departments' + '/' + id);
  }
}
