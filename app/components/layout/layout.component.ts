import {Component} from '@angular/core'
import {MenuItem} from "primeng/primeng";
import {SessionService} from "../../services/session.service";
import {FirebaseService} from "../../services/firebase.service";
import {Router} from "@angular/router";
import {BaseComponent} from "../base.component";

@Component({
  templateUrl: '../../../app/components/layout/layout.html'
})
export class LayoutComponent extends BaseComponent {
  role: string;
  private items: MenuItem[];

  constructor(public firebaseService: FirebaseService, private session: SessionService, public router: Router) {
    super();
    this.items = [
      {
        label: 'File',
        items: [
          {
            label: 'Dashboard',
            command: () => this.router.navigate(['dashboard'])
          },
          {
            label: 'User',
            command: () => this.router.navigate(['user'])
          },
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
