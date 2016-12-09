import {Component} from '@angular/core';
import {BaseComponent} from "../base.component";
import {Router} from "@angular/router";
import {FirebaseService} from "../../services/firebase.service";
import {SessionService} from "../../services/session.service";
import {Message} from "primeng/components/common/api";

@Component({
  selector: 'login',
  templateUrl: '../../../app/components/login/login.html',
  styleUrls: ['../../../app/components/login/login.css']
})
export class LoginComponent extends BaseComponent {
  email: string = 'user1@gmail.com';
  password: string = '123456';

  msgs: Message[] = [];

  constructor(public firebaseService: FirebaseService, private session: SessionService, public router: Router) {
    super();
    if (this.session.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  doLogin() {
    console.log("doLogin()");

    this.firebaseService.signInWithEmail(this.email, this.password);
    if(!this.session.isLoggedIn()) {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'', detail:'Invalid username or password'});
    }
  }
}
