import {Injectable} from "@angular/core";
import {SessionService} from "./session.service";
import {Router} from "@angular/router";

declare var firebase: any;

@Injectable()
export class FirebaseService {

  constructor(private session: SessionService, private router: Router) {

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
    this.loadUser();
    if(this.session.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  signOut(): void {
    firebase.auth().signOut();
    this.session.clear();
    this.router.navigate(['login']);
  }

  private loadUser(): void {
    let user = firebase.auth().currentUser;
    this.session.setUser(user);

    if (this.session.isLoggedIn()) {
      firebase.database().ref('roles/' + this.session.getUserId() + '/name').on('value', (snapshot: any) => {
        this.session.setRole(snapshot.val());
      });
    }
  }
}
