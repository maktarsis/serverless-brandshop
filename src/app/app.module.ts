import {
	BrowserModule,
	BrowserTransferStateModule
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { FirebaseModule } from './firebase';

import { appRouting } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
	imports: [
		BrowserModule.withServerTransition({ appId: 'app-root' }),
		BrowserTransferStateModule,
		HttpClientModule,
		RouterModule,
		appRouting,
		MaterialModule,
		SharedModule,
		FirebaseModule
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		ShoppingCartComponent
	],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}
