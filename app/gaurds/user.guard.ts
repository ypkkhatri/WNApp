import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {SessionService} from "../services/session.service";
import {Injectable} from "@angular/core";

@Injectable()
export class UserGuard implements CanActivate {

  constructor(private session: SessionService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.session.getUser().role === 'user') {
      return true;
    }
    this.router.navigate(['p404']);
    return false;
  }
}
