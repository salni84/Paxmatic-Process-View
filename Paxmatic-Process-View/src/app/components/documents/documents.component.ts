import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../../service/document.service';
import {Document} from '../../model/document';
import {LoginService} from '../../../service/login-service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})


export class DocumentsComponent implements OnInit {

  documents: Document[] = [];
  parentId: string;
  displayedColumns: string[] = ['nr', 'name', 'link', 'description'];
  showCreateElement = false;
  hideCreateElement = false;
  showAddButton = true;
  isAdmin = false;

  constructor(
    private location: Location,
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getLoginStatus().subscribe((data) => {
      if (data) {
        this.isAdmin = true;
        this.displayedColumns.push('löschen');
        this.displayedColumns.filter( ( item, index, inputArray ) => {
          return inputArray.indexOf(item) === index;
        });

      } else {
        this.isAdmin = false;
        this.hideAdd();
        this.displayedColumns = this.displayedColumns.filter(l => l !== 'löschen');
      }
    });
    this.getDocuments();
  }

  showAdd() {
    this.showCreateElement = true;
    this.hideCreateElement = true;
    this.showAddButton = false;
  }

  hideAdd() {
    this.showCreateElement = false;
    this.showAddButton = true;
    this.hideCreateElement = false;
  }

  getDocuments() {
    this.route.pathFromRoot[1].url.subscribe((val) => {
      this.parentId = val[2].path;

      this.documentService.getDocuments(this.parentId)
        .subscribe((data) => {
          this.documents = data;
        });
    });
  }


  addDocument(newDocument: Document) {
    this.documentService.addDocument(newDocument)
      .subscribe(() => this.getDocuments());
    this.documents.push(newDocument);
  }

  deleteDocument(id: number) {
    this.documentService.deleteDocument(id)
      .subscribe(() => {
        this.getDocuments();
      });
  }

  goBack() {
    this.location.back();
  }
}
