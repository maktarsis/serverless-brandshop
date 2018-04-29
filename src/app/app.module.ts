import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routes';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
	declarations: [AppComponent, HeaderComponent, AuthComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'app-root' }),
		BrowserTransferStateModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		RouterModule,
		FormsModule,
		SharedModule,
		appRouting,
		HomeModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
