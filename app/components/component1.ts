import {BaseComponent} from "./base.component";
import {Component} from "@angular/core";

@Component({
  template: `<h3>Welcome Admin</h3>`
})
export class Component1 extends BaseComponent {

  constructor() {
    super();
  }

}
