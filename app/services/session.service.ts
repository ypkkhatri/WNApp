
import {Injectable} from "@angular/core";

@Injectable()
export class SessionService {

  isLoggedIn(): boolean {
    return this.getUser() != null;
  }

  setUser(user: any): void {
    if(user == null)
      sessionStorage.removeItem('user');
    else
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any {
    if(sessionStorage.getItem('user') != null)
      return JSON.parse(sessionStorage.getItem('user'));
    else return null;
  }

  getUserId(): string {
    return this.getUser().uid;
  }

  setRole(value: string): void {
    sessionStorage.setItem('role', value);
  }

  getRole(): string {
    return sessionStorage.getItem('role');
  }

  setValue(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getValue(key: string): string {
    return sessionStorage.getItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }
}
