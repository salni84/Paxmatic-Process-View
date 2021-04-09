import {Injectable} from '@angular/core';
import {DialogModalComponent} from '../app/dialog/dialog-modal/dialog-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog,) {
  }

  openDuplikateDialog() {
    this.dialog.open(DialogModalComponent, {
      data: {
        title: 'Duplikat vorhanden!',
        message: 'Achtung, ein Prozess-Element mit diesem Namen existiert bereits!'
      }
    });
  }

  openDeleteDialog() {
    this.dialog.open(DialogModalComponent, {
      data: {
        title: 'Existierende Sub-Prozesse!',
        message: 'Achtung, für dieses Prozess-Element existieren noch verlinkte Sub-Prozesse!'
      }
    });
  }
}
