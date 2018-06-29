import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Router } from '@angular/router';
import {
  Observable,
  of
} from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { User } from './interfaces/user.interface';
import { User as fbUser } from 'firebase';
import { Credentials } from './interfaces/credentials.interface';

@Injectable()
export class AuthService {
  public user$: Observable<User>;

  constructor(
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router
  ) {

    this.user$ = this.afAuth.authState
        .switchMap((user: fbUser) => {
          if (!user) {
            return of(null);
          }

          return this.afs.doc<fbUser>(`users/${user.uid}`).valueChanges();
        });

  }

  public emailSignUp({ email, password }: Credentials): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user: fbUser) => this.setUserDoc(user))
        .catch((error: Error) => this.handleError(error));
  }

  public updateUser(user: User, data: { catchPhrase: string }): void {
    this.afs.doc(`users/${user.uid}`).update(data).then();
  }

  public signOut(): void {
    this.afAuth.auth.signOut().then();
  }

  public signIn({ email, password }: Credentials): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then();
  }

  private setUserDoc(user: fbUser): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email
    };

    return userRef.set(data);
  }

  private handleError(error): void {
    console.error(error);
  }
}
