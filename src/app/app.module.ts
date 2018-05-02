import {
	BrowserModule,
	BrowserTransferStateModule
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MaterialModule } from './shared/material/material.module';
import { appRouting } from './app.routes';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { environment } from '../environments/environment';
import { CartService } from './shared/cart.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		AuthComponent,
		ShoppingCartComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'app-root' }),
		BrowserTransferStateModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		RouterModule,
		FormsModule,
		HttpClientModule,
		MaterialModule,
		appRouting,
		HomeModule
	],
	providers: [CartService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
