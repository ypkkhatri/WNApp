import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../base.component";
import {User} from "./user";
import {SelectItem} from "primeng/primeng";
import {FirebaseService} from "../../services/firebase.service";
import {Message} from "primeng/components/common/api";

@Component({
  templateUrl: '../../../app/components/user/user.html',
})
export class UserComponent extends BaseComponent implements OnInit {
  /**
   * Setup
   * */
  roles: SelectItem[];
  msgs: Message[];

  users: User[];
  selectedUser: User;
  displayDialog: boolean;
  newUser: boolean;

  constructor(private firebaseService: FirebaseService) {
    super();

    this.roles = [];
    this.roles.push({label:'Select Role', value:null});
    this.roles.push({label:'Admin', value: 'admin'});
    this.roles.push({label:'User', value: 'user'});
  }

  ngOnInit() {
    this.users = [];
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'', detail:'Data Loading...'});
    this.firebaseService.getUsers().then((data: any) => {
      for(let key in data) {
        this.users.push({uid: key, email: data[key].email, password: '', role: data[key].role});
      }
      this.msgs = [];
      // console.log(data);
    });
  }

  save() {
    this.msgs = [];

    if(this.selectedUser.email == null || this.selectedUser.email == '' ||
      this.selectedUser.password == null || this.selectedUser.password == ''||
      this.selectedUser.role == null || this.selectedUser.role == ''
    ) {
      this.msgs.push({severity:'error', summary:'', detail:'Fill all the fields'});
      return;
    }

    this.msgs = [];
    this.msgs.push({severity:'info', summary:'', detail:'Please wait...'});
    if(this.newUser) {
      this.firebaseService.addUser(this.selectedUser).then((data: any) => {
        this.users.push(this.selectedUser);
        this.selectedUser = null;
        this.displayDialog = false;
        this.msgs = [];
      }).catch((error:any) => {
        console.log(error);
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'', detail:error.message});
      });
    } else {
      this.firebaseService.updateUser(this.selectedUser).then((data: any) => {
        this.users[this.findSelectedUserIndex()] = this.selectedUser;
        this.selectedUser = null;
        this.displayDialog = false;
        this.msgs = [];
      }).catch((error:any) => {
        console.log(error);
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'', detail:error.message});
      });
    }
  }

  delete() {
    this.msgs.push({severity:'info', summary:'', detail:'Please wait...'});
    this.firebaseService.deleteUser(this.selectedUser).then(() => {
      this.users.splice(this.findSelectedUserIndex(), 1);
      this.selectedUser = null;
      this.displayDialog = false;
      this.msgs = [];
    }).catch((error:any) => {
      console.log(error);
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'', detail:error.message});
    });;
  }

  showDialogToAdd() {
    this.newUser = true;
    this.selectedUser = new User();
    this.displayDialog = true;
  }

  onRowSelect(event: any) {
    this.newUser = false;
    this.selectedUser = event.data;
    this.displayDialog = true;
  }

  findSelectedUserIndex(): number {
    return this.users.indexOf(this.selectedUser);
  }
}
