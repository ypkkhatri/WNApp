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
  email: string = '';
  password: string = '';

  msgs: Message[] = [];

  constructor(public firebaseService: FirebaseService, private session: SessionService, public router: Router) {
    super();
    if (this.session.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  doLogin() {
    console.log("doLogin()");

    this.msgs = [];
    this.msgs.push({severity:'info', summary:'', detail:'Please wait...'});

    this.firebaseService.signInWithEmail(this.email, this.password).then((data: any) => {
      this.firebaseService.getUser(data.uid).then((user: any) => {
        this.session.setUser(user);
        this.msgs = [];
        if (this.session.isLoggedIn()) {
          this.router.navigateByUrl('/dashboard');
          this.msgs.push({severity:'success', summary:'', detail:'Logged In successfully'});
        }
      });
      // this.firebaseService.loadUser();
    }).catch((error: any) => {
      this.msgs = [];
      console.log(error);
      this.msgs.push({severity:'error', summary:'', detail:error.message});
    });
  }
}
