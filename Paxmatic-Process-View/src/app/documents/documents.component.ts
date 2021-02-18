import { Component, OnInit } from '@angular/core';
import { Document} from '../model/document';
import {DocumentService} from '../../service/document.service';
import {ActivatedRoute} from '@angular/router';
import {log} from "util";
import {async} from "rxjs";




@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})


export class DocumentsComponent implements OnInit {

  documents: Document[] = [];
  parentId: string

  constructor(private documentService: DocumentService, private route: ActivatedRoute) { }

  displayedColumns: string[] = ['nr', 'name', 'link', 'description'];


  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments() {
    this.route.pathFromRoot[1].url.subscribe((val) => {
      this.parentId = val[2].path;

      this.documentService.getDocuments(this.parentId)
        .subscribe((data) => {
          this.documents = data;
          console.log(data);
        });
    });
  }
}
