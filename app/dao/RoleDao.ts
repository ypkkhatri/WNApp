import {Injectable} from "@angular/core";
import {UserDao} from "./UserDao";

declare var firebase: any;

@Injectable()
export class RoleDao {

  private role: string;

  constructor(public userDao: UserDao) {
    this.init();
  }

  init(): void {
    if (this.userDao.isLoggedIn()) {
      firebase.database().ref('/roles/Z9tlmo1fs0cBIGBY02WW4P4IYTC2/').set({
        name: "admin"
      });
      firebase.database().ref('/roles/z3QCR9v3bDe7auIrlhV8GqymaH73/').set({
        name: "user"
      });
    }
  }

  public loadUserRoleById(id: string): void {
    firebase.database().ref('roles/' + id + '/name').on('value', (snapshot: any) => {
      this.role = snapshot.val();
    });
  }

  unloadRole() {
    this.role = null;
  }

  getRole(): string {
    return this.role;
  }

}
