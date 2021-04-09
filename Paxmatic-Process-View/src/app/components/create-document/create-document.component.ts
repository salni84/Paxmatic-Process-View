import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Document} from '../../model/document';


@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocumentComponent implements OnInit {

  @Input() parentId;
  @Input() coreElement;
  @Output() newDocumentEvent = new EventEmitter<Document>();
  newDocument: Document = new Document();

  constructor() {
  }

  ngOnInit(): void {
  }

  createNewDocument() {
    this.newDocument.parent = this.parentId;
    this.newDocument.coreElement = this.coreElement;
    this.newDocumentEvent.emit(this.newDocument);
    this.newDocument.description = '';
    this.newDocument.link = '';
    this.newDocument.name = '';
    this.newDocument.nr = '';
  }
}
