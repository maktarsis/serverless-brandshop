import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { AuthService } from './auth.service';
import { Credentials } from './interfaces/credentials.interface';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  public user: User;
  public isNewUser: boolean;

  constructor(
      private authService: AuthService,
      private cdr: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.isNewUser = true;

    this.authService.user$.subscribe((user: User) => {
      this.user = user;

      if (user === null) {
        return;
      }

      this.cdr.detectChanges();
    });
  }

  public signIn(credentials: Credentials): void {
    this.authService.signIn(credentials);
  }

  public signUp(credentials: Credentials): void {
    this.authService.emailSignUp(credentials);
  }

  public setCatchPhrase(catchPhrase: string): void {
    this.authService.updateUser(this.user, { catchPhrase });
  }

  public signOut(): void {
    this.authService.signOut();
    this.cdr.detectChanges();
  }

  public toggleAuthMethod(): void {
    this.isNewUser = !this.isNewUser;
  }
}
