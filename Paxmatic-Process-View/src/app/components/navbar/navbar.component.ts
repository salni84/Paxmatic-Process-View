import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ProcessElement} from '../../model/process-element';
import {getBasicProcess} from "../../store/selectors/process.selector";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<{process: ProcessElement[]}>) {}

  ngOnInit() {
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }

  getBasicProcess() {

  }
}
