import {BaseComponent} from "./base.component";
import {Component} from "@angular/core";

@Component({
  template: `<h3>Access Denied</h3>`
})
export class p404Component extends BaseComponent {

  constructor() {
    super();
  }
}
