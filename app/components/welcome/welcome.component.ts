import {Component} from '@angular/core';
import {BaseComponent} from "../base.component";
import {UserDao} from "../../dao/UserDao";
import {RoleDao} from "../../dao/RoleDao";
import {MenuItem} from "primeng/components/common/api";
import {Router} from "@angular/router";

@Component({
  selector: 'welcome',
  templateUrl: '../../../app/components/welcome/welcome.html'
})
export class WelcomeComponent extends BaseComponent {
  role: string;

  private items: MenuItem[];

  constructor(public userDao: UserDao, public roleDao: RoleDao, public router: Router) {
    super();

    if(!userDao.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }

    this.role = roleDao.getRole();


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

  }
}
