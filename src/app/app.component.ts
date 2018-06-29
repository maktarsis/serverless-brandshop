import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
    db.firestore.enablePersistence().catch((err: Error) => console.error(err));
  }
}
