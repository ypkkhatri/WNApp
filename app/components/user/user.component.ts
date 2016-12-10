import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../base.component";
import {User} from "./user";

@Component({
  templateUrl: '../../../app/components/user/user.html',
})
export class UserComponent extends BaseComponent implements OnInit {
  users: User[];
  user: User;

  constructor() {
    super();
  }

  ngOnInit() {

  }

}
