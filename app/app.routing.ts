import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {LoginComponent} from "./components/login/login.component";
/**
 * Created by yougeshwarkhatri on 08/12/2016.
 */

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
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
