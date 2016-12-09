import {Component} from '@angular/core';
import {BaseComponent} from "../base.component";
import {MenuItem} from "primeng/components/common/api";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'welcome',
  templateUrl: '../../../app/components/welcome/welcome.html'
})
export class WelcomeComponent extends BaseComponent {
  role: string;

  private items: MenuItem[];

  constructor(public firebaseService: FirebaseService, private session: SessionService, public router: Router) {
    super();

    if(!session.isLoggedIn()) {
      this.router.navigate(['login']);
    }

    this.role = session.getRole();

    this.items = [
      {
        label: 'File',
        items: [
          {
            label: 'Component1',
            command: () => this.router.navigate(['component1'])
          },
          {
            label: 'Component2',
            command: () => this.router.navigate(['component2'])
          },
          {
            label: 'Logout',
            command: () => this.doLogout()
          }
        ]
      }
    ];
  }

  doLogout() {
    console.log("doLogout()");

    this.firebaseService.signOut();
  }
}
