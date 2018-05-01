import { ModuleWithProviders } from '@angular/core';
import {
	RouterModule,
	Routes
} from '@angular/router';

import { LocationComponent } from './location.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: LocationComponent
	}
];

export const locationRouting: ModuleWithProviders = RouterModule.forChild(routes);
