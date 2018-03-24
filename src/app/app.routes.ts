import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent,
	},
	{
		path: 'shop',
		pathMatch: 'full',
		component: ShopComponent,
	},
	{
		path: 'auth',
		pathMatch: 'full',
		component: AuthComponent,
	},
	{
		path: '**',
		redirectTo: '',
	},
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
