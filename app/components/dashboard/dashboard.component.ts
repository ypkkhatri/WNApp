import {Component} from '@angular/core';
import {BaseComponent} from "../base.component";
import {MenuItem} from "primeng/components/common/api";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'welcome',
  templateUrl: '../../../app/components/dashboard/dashboard.html'
})
export class DashboardComponent extends BaseComponent {

  constructor() {
    super();
  }
}
