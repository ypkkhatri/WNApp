import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {LoginComponent} from "./components/login/login.component";
import {Component1} from "./components/component1";
import {Component2} from "./components/component2";
import {p404Component} from "./components/p404.component";
import {AdminGuard} from "./gaurds/admin.guard";
import {UserGuard} from "./gaurds/user.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'component1',
    component: Component1,
    canActivate: [AdminGuard]
  },
  {
    path: 'component2',
    component: Component2,
    canActivate: [UserGuard]
  },
  {
    path: 'p404',
    component: p404Component
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
