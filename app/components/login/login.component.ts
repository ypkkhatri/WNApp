import {Component} from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'login',
  templateUrl: '../../../app/components/login/login.html'
//   template:
//   `<p-dialog header="Login" visible="true" modal="true" draggable="false" closable="false" resizable="false">
//   <p-messages [value]="msgs"></p-messages>
//   <h3 class="first">Username</h3>
//   <input id="username" type="text" size="30" pInputText [(ngModel)]="username" />
//   <h3 class="first">Password</h3>
//   <input id="password" type="password" size="30" pPassword [(ngModel)]="username" />
//   <button pButton (click)="doLogin()" value="Login"></button>
//   </p-dialog>
// `
})
export class LoginComponent extends BaseComponent {
  username = 'admin';
  password = 'admin';

  doLogin() {
    console.log("doLogin()");
  }
}
