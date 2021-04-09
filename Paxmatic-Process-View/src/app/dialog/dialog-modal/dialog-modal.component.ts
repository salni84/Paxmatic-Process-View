
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }) {
  }

  ngOnInit(): void {
  }
}
