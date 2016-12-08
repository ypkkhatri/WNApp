import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {InputTextModule, ButtonModule, DialogModule, PasswordModule, MessagesModule} from "primeng/primeng";
import {LoginComponent} from "./components/login/login.component";
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "angularfire2";
import {UserDao} from "./dao/UserDao";
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routing";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {RoleDao} from "./dao/RoleDao";
import {MenubarModule} from "primeng/components/menubar/menubar";

export const firebaseConfig = {
  apiKey: "AIzaSyDGrAlwAsQ1UPLQDZNYD3LXgmniQaNjx8c",
  authDomain: "pbdemo-3f429.firebaseapp.com",
  databaseURL: "https://pbdemo-3f429.firebaseio.com",
  storageBucket: "pbdemo-3f429.appspot.com",
  messagingSenderId: "1021804409313"
  // apiKey: "AIzaSyCBc6MXuOxshjOO-k6R99y1fNzqhqlIPqk",
  // authDomain: "numbyran.firebaseapp.com",
  // databaseURL: "https://numbyran.firebaseio.com",
  // storageBucket: "numbyran.appspot.com",
  // messagingSenderId: "102567698279"
};

@NgModule({
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    PasswordModule,
    MessagesModule,
    MenubarModule,
    FormsModule,
    AppRoutes,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [UserDao, RoleDao],
  declarations: [AppComponent, LoginComponent, WelcomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
