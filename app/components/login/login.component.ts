import {Component} from '@angular/core';
import {BaseComponent} from "../base.component";
import {UserDao} from "../../dao/UserDao";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: '../../../app/components/login/login.html'
})
export class LoginComponent extends BaseComponent {
  uid: string;
  email: string = 'user1@gmail.com';
  password: string = '123456';

  constructor(public userDao: UserDao, public router: Router) {
    super();
    if (this.userDao.id() != null) {
      this.router.navigate(['/home']);
    }
  }

  doLogin() {
    console.log("doLogin()");

    this.userDao.signInWithEmail(this.email, this.password);
  }
}
