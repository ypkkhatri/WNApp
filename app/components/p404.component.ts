import {BaseComponent} from "./base.component";
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  template: `<h3>Access Denied</h3>
  <button type="button" pButton label="Home" (click)="goHome()"></button>
  `
})
export class p404Component extends BaseComponent {

  constructor(private router: Router) {
    super();
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
