import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {InputTextModule, ButtonModule, DialogModule, PasswordModule, MessagesModule} from "primeng/primeng";
import {LoginComponent} from "./components/login/login.component";
import {FormsModule} from "@angular/forms";
import {AppRoutes} from "./app.routing";
import {DashboardComponent} from "components/dashboard/dashboard.component.ts";
import {MenubarModule} from "primeng/components/menubar/menubar";
import {Component1} from "./components/component1";
import {Component2} from "./components/component2";
import {p404Component} from "./components/p404.component";
import {FirebaseService} from "./services/firebase.service";
import {SessionService} from "./services/session.service";
import {AdminGuard} from "./gaurds/admin.guard";
import {UserGuard} from "./gaurds/user.guard";
import {PanelModule} from "primeng/components/panel/panel";
import {UserComponent} from "./components/user/user.component";

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
    PanelModule,
    AppRoutes
  ],
  providers: [FirebaseService, SessionService, AdminGuard, UserGuard],
  declarations: [AppComponent, LoginComponent, DashboardComponent, UserComponent, Component1, Component2, p404Component],
  bootstrap: [AppComponent]
})
export class AppModule {
}
