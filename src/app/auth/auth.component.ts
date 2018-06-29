import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { User as fbUser } from 'firebase';
import { AuthService } from './auth.service';
import { Credentials } from './interfaces/credentials.interface';

@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  public user: fbUser;
  public isNewUser: boolean;

  constructor(
      private authService: AuthService,
      private cdr: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.isNewUser = true;

    this.authService.user$.subscribe((user: fbUser) => {
      this.user = user;
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
  }

  public toggleAuthMethod(): void {
    this.isNewUser = !this.isNewUser;
  }
}
