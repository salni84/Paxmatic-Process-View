import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../../service/document.service';
import {Document} from '../../model/document';
import {LoginService} from '../../../service/login-service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProcessService} from '../../../service/process-service';
import {map} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})


export class DocumentsComponent implements OnInit {

  documents: Document[] = [];
  parentId: string;
  coreElement: string;
  displayedColumns: string[] = ['nr', 'name', 'link', 'description'];
  showCreateElement = false;
  hideCreateElement = false;
  showAddButton = true;
  isAdmin = false;
  nextProcess: any[];


  constructor(
    private location: Location,
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private processService: ProcessService,
    private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    console.log("hallo")
    this.loginService.getLoginStatus().subscribe((data) => {
      if (data) {
        this.isAdmin = true;
        this.displayedColumns.push('löschen');
        this.displayedColumns.filter( ( item, index, inputArray ) => {
          return inputArray.indexOf(item) === index;
        });
      } else {
        this.isAdmin = false;
        this.hideAddProcessComponent();
        this.displayedColumns = this.displayedColumns.filter(l => l !== 'löschen');
      }
    });
    this.getDocuments();
    this.getNextDocuments();
    this.getDocumentByCoreElement();
  }

  showAddProcessComponent() {
    this.showCreateElement = true;
    this.hideCreateElement = true;
    this.showAddButton = false;
  }

  hideAddProcessComponent() {
    this.showCreateElement = false;
    this.showAddButton = true;
    this.hideCreateElement = false;
  }

  getDocuments() {
    this.route.pathFromRoot[1].url.subscribe((val) => {
      this.parentId = val[4].path;
      this.documentService.getDocumentsByCoreElement(this.parentId)
        .subscribe((data) => {
          this.documents = data;
        });
    });
  }

  getDocumentByCoreElement() {
    this.route.pathFromRoot[1].url.subscribe((val) => {
      this.coreElement = val[5].path;
      this.documentService.getDocumentsByCoreElement(this.coreElement)
        .subscribe((data) => {
          this.documents = data;
        });
    });
  }

  getNextDocuments() {
    this.route.pathFromRoot[1].url.subscribe((value) => {
      this.coreElement = value[5].path;
    });
    this.processService.getProcess('detail', this.parentId)
        .pipe(
          map(items => items.filter(item => item.order === 3 && !item.isStart)))
        .subscribe((data) => {this.nextProcess = data;
        });
  }

  addDocument(newDocument: Document) {
    this.documentService.addDocument(newDocument)
      .subscribe(() => this.getDocumentByCoreElement());
    this.documents.push(newDocument);
  }

  deleteDocument(id: number) {
    this.documentService.deleteDocument(id)
      .subscribe(() => {
        this.getDocumentByCoreElement();
      });
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
