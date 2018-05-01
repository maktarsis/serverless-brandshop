import { ModuleWithProviders } from '@angular/core';
import {
	RouterModule,
	Routes
} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent
	},
	{
		path: 'shop',
		loadChildren: 'app/shop/shop.module#ShopModule'
	},
	{
		path: 'location',
		loadChildren: 'app/location/location.module#LocationModule'
	},
	{
		path: 'auth',
		pathMatch: 'full',
		component: AuthComponent
	}
];

export const appRouting: ModuleWithProviders =
	RouterModule.forRoot(routes
		// { enableTracing: true}
	);
