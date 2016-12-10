import {BaseComponent} from "./base.component";
import {Component} from "@angular/core";

@Component({
  template: `<h3>Welcome User</h3>`
})
export class Component2 extends BaseComponent {

  constructor() {
    super();
  }
}
