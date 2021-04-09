<<<<<<< HEAD
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

=======
import { Component, OnInit } from '@angular/core';
>>>>>>> origin/master

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit {

<<<<<<< HEAD

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }) {
  }

  ngOnInit(): void {
  }
=======
  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> origin/master
}
