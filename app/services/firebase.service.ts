import {Injectable} from "@angular/core";
import {SessionService} from "./session.service";
import {Router} from "@angular/router";
import {User} from "../components/user/user";

declare var firebase:any;

@Injectable()
export class FirebaseService {

  constructor(private session:SessionService, private router:Router) {
    //firebase.database.enableLogging(true);
    this.setup();
  }

  setup() {
    let username = 'wn@gmail.com';
    let password = '123456';
    this.signInWithEmail(username, password).then((data: any) => {
      this.signOut();
    }).catch((error:any) => {
      this.addUser({email: username, password: password, role: 'admin', uid: null}).catch((error:any) => {
        console.log(error);
      });
      //console.log(error);
    });
  }

  signupUser(email:string, password:string): any {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  signInWithEmail(email:string, password:string):any {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  signOut():void {
    firebase.auth().signOut().then(() => {
      this.session.clear();
      this.router.navigate(['login']);
    });
  }

  addUser(user:User): any {
    return this.signupUser(user.email, user.password).then((data:any) => {
      user.password = null;
      firebase.database().ref("users/" + data.uid).set(user);
    })
  }

  updateUser(user:User): any {
    return firebase.database().ref("users/" + user.uid).update(user);
  }

  deleteUser(user:User): any {
    return firebase.database().ref("users/" + user.uid).remove();
  }

  getUser(id: string): any {
    return firebase.database().ref('users/' + id).once('value').then((snapshot: any) => {
      let data = snapshot.val();
      data.uid = id;
      return data;
    });
  }

  getUsers(): any {
    return firebase.database().ref('users/').once('value').then((snapshot: any) => {
      let data = snapshot.val();
      return data;
    });
  }
}
