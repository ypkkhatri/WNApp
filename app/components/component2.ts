import {BaseComponent} from "./base.component";
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  template: `<h3>Welcome User</h3>
  <button type="button" pButton label="Home" (click)="goHome()"></button>`
})
export class Component2 extends BaseComponent {

  constructor(private router: Router) {
    super();
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
