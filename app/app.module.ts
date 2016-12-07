import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {InputTextModule, ButtonModule, DialogModule, PasswordModule, MessagesModule} from "primeng/primeng";
import {LoginComponent} from "./components/login/login.component";
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "angularfire2";

export const firebaseConfig = {
  // apiKey: '<your-key>',
  // authDomain: '<your-project-authdomain>',
  // databaseURL: '<your-database-URL>',
  // storageBucket: '<your-storage-bucket>'
  apiKey: "AIzaSyCBc6MXuOxshjOO-k6R99y1fNzqhqlIPqk",
  authDomain: "numbyran.firebaseapp.com",
  databaseURL: "https://numbyran.firebaseio.com",
  storageBucket: "numbyran.appspot.com",
  messagingSenderId: "102567698279"
};

@NgModule({
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    PasswordModule,
    MessagesModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [LoginComponent]
})
export class AppModule {
}
