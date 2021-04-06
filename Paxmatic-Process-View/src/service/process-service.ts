import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProcessElement} from '../app/model/process-element';
import {environment} from '../environments/environment';
import {CdkDragDrop} from '@angular/cdk/drag-drop';


@Injectable({
  providedIn: 'root'
})

export class ProcessService {

  private serverURL = environment.serverURL;

  constructor(private http: HttpClient) { }

  getProcess(level: string, parent: string): Observable<any> {
    return this.http.get(this.serverURL + level + '/' + parent);
  }

  addProcessElement(process: ProcessElement, level: string): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(process);
    return this.http.post(this.serverURL + level + '/new', body, {headers});
  }

  updateProcessList(process: ProcessElement[], level: string): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(process);
    return this.http.put(this.serverURL + level, body, {headers});
  }

  deleteProcess(id: number, level: string): Observable<any> {
    return this.http.delete(this.serverURL + level + '/' + id);
  }



  createEvent(previousIndex: number, currentIndex: number): CdkDragDrop<any[], any[]> {
    return {
      previousIndex,
      currentIndex,
      item: undefined,
      container: undefined,
      previousContainer: undefined,
      isPointerOverContainer: true,
      distance: { x: 0, y: 0 }
    };
  }
}

