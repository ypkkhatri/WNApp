import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, FirebaseAuthState, AuthMethods} from "angularfire2";
/**
 * Created by yougeshwarkhatri on 08/12/2016.
 */

@Injectable()
export class UserDao {
  uid: string;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => this.uid = auth ? auth.uid : null);
  }

  id(): string {
    return this.uid;
  }

  signInWithEmail(email: string, password: string): void {
    this.af.auth.login({email:email, password:password}, {provider: AuthProviders.Password,method: AuthMethods.Password})
      .catch(error => console.log('ERROR @ UserDao#signIn() :', error));
    this.af.auth.subscribe(auth => this.uid = auth ? auth.uid : null);
  }

  signOut(): void {
    this.af.auth.logout();
    this.uid = null;
  }
}
