import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AuthComponent } from '../../auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(
      public router: Router,
      private dialog: MatDialog
  ) {
  }

  public auth(): void {
    this.authPopUp();
  }

  private authPopUp(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe((contact: any) => {
      if (!contact) {
        return;
      }
    });
  }
}
