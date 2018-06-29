import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import {
  Observable,
  of
} from 'rxjs';
import {
  switchMap,
  share
} from 'rxjs/operators';

import { User } from './interfaces/user.interface';
import { User as fbUser } from 'firebase';
import { Credentials } from './interfaces/credentials.interface';

@Injectable()
export class AuthService {
  public user$: Observable<User>;

  constructor(
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore
  ) {
    this.user$ = this.afAuth.authState
        .pipe(
            switchMap((user: fbUser) => {
              if (!user) {
                return of(null);
              }

              return this.afs.doc<fbUser>(`users/${user.uid}`).valueChanges();
            }),
            share()
        );

  }

  public emailSignUp({ email, password }: Credentials): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user: fbUser) => this.setUserDoc(user))
        .catch((error: Error) => console.error(error));
  }

  public updateUser(user: User, data: { catchPhrase: string }): Promise<void> {
    return this.afs.doc(`users/${user.uid}`).update(data);
  }

  public signOut(): void {
    this.afAuth.auth.signOut().catch((err: Error) => console.error(err));
  }

  public signIn({ email, password }: Credentials): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch((err: Error) => console.error(err));
  }

  private setUserDoc(user: fbUser): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email
    };

    return userRef.set(data);
  }
}
