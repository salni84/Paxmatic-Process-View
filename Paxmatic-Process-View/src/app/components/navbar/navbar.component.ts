import {Component, OnInit} from '@angular/core';
import {ProcessService} from "../../../service/process-service";
import {ProcessComponent} from "../process/process.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }


}
