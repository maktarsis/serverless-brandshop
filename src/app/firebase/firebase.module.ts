import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';

@NgModule({
	imports: [
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		AngularFireModule.initializeApp(environment.firebase)
	]
})
export class FirebaseModule {
}