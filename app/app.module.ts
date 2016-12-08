import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {InputTextModule, ButtonModule, DialogModule, PasswordModule, MessagesModule} from "primeng/primeng";
import {LoginComponent} from "./components/login/login.component";
import {FormsModule} from "@angular/forms";
import {UserDao} from "./dao/UserDao";
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routing";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {RoleDao} from "./dao/RoleDao";
import {MenubarModule} from "primeng/components/menubar/menubar";

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
    AppRoutes
  ],
  providers: [UserDao, RoleDao],
  declarations: [AppComponent, LoginComponent, WelcomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
