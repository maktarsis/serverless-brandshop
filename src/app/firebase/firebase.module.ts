import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

@NgModule({
	imports: [
		AngularFirestoreModule,
		AngularFireModule.initializeApp(environment.firebase)
	]
})
export class FirebaseModule {
}