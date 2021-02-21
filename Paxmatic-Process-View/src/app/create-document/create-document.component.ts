import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Document} from '../model/document';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocumentComponent implements OnInit {

  newDocument: Document = new Document();
  @Input() parentId;
  @Output() newDocumentEvent = new EventEmitter<Document>();

  constructor() {}

  ngOnInit(): void {
  }

  newElement() {
    this.newDocument.parent = this.parentId;
    this.newDocumentEvent.emit(this.newDocument);
  }
}
