import {Injectable} from "@angular/core";
import {
  AngularFire, AuthProviders, FirebaseAuthState, AuthMethods, FirebaseDatabase,
  FirebaseObjectObservable
} from "angularfire2";
import {UserDao} from "./UserDao";
/**
 * Created by yougeshwarkhatri on 08/12/2016.
 */

@Injectable()
export class RoleDao {

  constructor(public af: AngularFire, public userDao: UserDao) {
    this.init();
  }

  init(): void {
    if (this.userDao.id() != null) {
      let obj = this.af.database.object('/roles/Z9tlmo1fs0cBIGBY02WW4P4IYTC2/');
      obj.set({
        name: 'admin'
      });
      obj = this.af.database.object('/roles/z3QCR9v3bDe7auIrlhV8GqymaH73/');
      obj.set({
        name: 'user'
      });
    }
  }

  getUserRoleById(id: string): any {
    let obj: FirebaseObjectObservable<any> = this.af.database.object('/roles/' + id + '/');
    return obj.name;
  }

}
