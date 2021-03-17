import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Document} from '../../model/document';


@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocumentComponent implements OnInit {

  @Input() parentId;
  @Output() newDocumentEvent = new EventEmitter<Document>();
  newDocument: Document = new Document();
  value = 'Name';


  constructor() {}

  ngOnInit(): void {}

  newElement() {
    this.newDocument.parent = this.parentId;
    this.newDocumentEvent.emit(this.newDocument);
    }
}
