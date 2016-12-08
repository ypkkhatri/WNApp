import {Component} from '@angular/core';
import {BaseComponent} from "../base.component";
import {AngularFire, FirebaseAuth, AuthMethods, AuthProviders} from "angularfire2";
import {UserDao} from "../../dao/UserDao";
import {RoleDao} from "../../dao/RoleDao";
import {MenuItem} from "primeng/components/common/api";
import {Router} from "@angular/router";

@Component({
  selector: 'welcome',
  templateUrl: '../../../app/components/welcome/welcome.html'
})
export class WelcomeComponent extends BaseComponent {
  uid: string;
  role: string;

  private items: MenuItem[];

  constructor(public userDao: UserDao, public roleDao: RoleDao, public router: Router, public af: AngularFire) {
    super();

    this.af.auth.subscribe(auth => this.uid = auth ? auth.uid : null);

    if(this.uid == null && userDao.id() == null) {
      this.router.navigateByUrl('/login');
    }

    this.role = roleDao.getUserRoleById(this.uid);


    this.items = [
      {
        label: 'File',
        items: [
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

    this.userDao.signOut();
    this.router.navigate(['login']);
  }
}
