import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {RoleDao} from "./RoleDao";

declare var firebase: any;

@Injectable()
export class UserDao {

  constructor(public router: Router, public roleDao: RoleDao) {
  }

  isLoggedIn() : boolean {
    return this.id() != null;
  }

  id(): string {
    let user = firebase.auth().currentUser;
    if(user == null) return null;
    return user.uid;
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error: any){
      console.log(error);
    });
  }

  signInWithEmail(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error: any) {
      console.log(error);
    });
    if(this.isLoggedIn()) {
      this.roleDao.loadUserRoleById(this.id());
      this.router.navigate(['/home']);
    }
  }

  signOut(): void {
    firebase.auth().signOut();
    this.roleDao.unloadRole();
    this.router.navigate(['login']);
  }
}
