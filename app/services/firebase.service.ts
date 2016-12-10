import {Injectable} from "@angular/core";
import {SessionService} from "./session.service";
import {Router} from "@angular/router";

declare var firebase: any;

@Injectable()
export class FirebaseService {

  constructor(private session: SessionService, private router: Router) {
    this.init();
  }

  init(): void {
    if (this.session.isLoggedIn()) {
      firebase.database().ref('/roles/Z9tlmo1fs0cBIGBY02WW4P4IYTC2/').set({
        name: "admin"
      });
      firebase.database().ref('/roles/z3QCR9v3bDe7auIrlhV8GqymaH73/').set({
        name: "user"
      });
    }
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error: any) {
      console.log(error);
    });
  }

  signInWithEmail(email: string, password: string): any {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  signOut(): void {
    firebase.auth().signOut().then(() => {
      this.session.clear();
      this.router.navigate(['login']);
    });
  }

  loadUser(): void {
    let user = firebase.auth().currentUser;
    this.session.setUser(user);

    if (this.session.isLoggedIn()) {
      firebase.database().ref('roles/' + this.session.getUserId() + '/name').on('value', (snapshot: any) => {
        this.session.setRole(snapshot.val());
      });
    }
  }
}
