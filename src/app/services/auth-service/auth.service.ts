import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  readonly authState: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.authState = afAuth.authState;
  }

  async anonymousLogin(name: string): Promise<any> {
    await this.afAuth.auth.signInAnonymously();
    this.afAuth.auth.currentUser.updateProfile({
      displayName: name,
      photoURL: ""
    });
  }

  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

}
