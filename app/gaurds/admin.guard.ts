import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {SessionService} from "../services/session.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private session: SessionService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.session.getRole() === 'admin') {
      return true;
    }
    this.router.navigate(['p404']);
    return false;
  }
}
