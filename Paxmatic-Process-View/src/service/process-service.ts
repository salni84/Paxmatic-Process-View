import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProcessElement} from '../app/model/process-element';
import {CdkDragDrop} from '@angular/cdk/drag-drop';


@Injectable({
  providedIn: 'root'
})

export class ProcessService {

  //private serverURL = 'http://robertobackend-env.eba-nwy2bvpi.us-east-2.elasticbeanstalk.com/';
  private serverURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }


  getProcess(parent: number): Observable<any> {
    return this.http.get(this.serverURL + parent);
  }

  getFullProcessLoad(): Observable<any> {
    return this.http.get(this.serverURL + 'all');
  }

  getAllProcess(level: number): Observable<any> {
    return this.http.get(this.serverURL + level);
  }

  addProcessElement(process): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(process.payload);
    return this.http.post(this.serverURL + 'new', body, {headers});
  }

  updateProcessProperties(process): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(process.payload);
    return this.http.put(this.serverURL + 'update', body, {headers});
  }

  updateProcessOrder(process): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(process.payload);
    return this.http.put(this.serverURL + 'updateOrder', body, {headers});
  }

  deleteProcess(id): Observable<any> {
    const body = JSON.stringify(id.payload);
    return this.http.delete(this.serverURL + body);
  }

  createEvent(previousIndex: number, currentIndex: number): CdkDragDrop<any[], any[]> {
    return {
      previousIndex,
      currentIndex,
      item: undefined,
      container: undefined,
      previousContainer: undefined,
      isPointerOverContainer: true,
      distance: {x: 0, y: 0}
    };
  }
}
