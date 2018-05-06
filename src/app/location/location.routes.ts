import { ModuleWithProviders } from '@angular/core';
import {
	RouterModule,
	Routes
} from '@angular/router';

import { MapComponent } from './map/map.component';
import { StocklistsComponent } from './stocklists/stocklists.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: MapComponent
	},
	{
		path: 'stocklists',
		pathMatch: 'full',
		component: StocklistsComponent
	}
];

export const locationRouting: ModuleWithProviders = RouterModule.forChild(routes);
