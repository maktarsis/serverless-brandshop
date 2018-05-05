import { ModuleWithProviders } from '@angular/core';
import {
	RouterModule,
	Routes
} from '@angular/router';

import { LocationComponent } from './location.component';
import { MapComponent } from './map/map.component';
import { LocationResolver } from './location.resolver';
import { StocklistsComponent } from './stocklists/stocklists.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: MapComponent
	},
	{
		path: 'contacts',
		pathMatch: 'full',
		component: ContactsComponent
	},
	{
		path: 'stocklists',
		pathMatch: 'full',
		component: StocklistsComponent
	}
];

export const locationRouting: ModuleWithProviders = RouterModule.forChild(routes);
