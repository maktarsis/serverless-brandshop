import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LocationComponent } from './location.component';
import { locationRouting } from './location.routes';
import { MarkerDirective } from './shared/marker.directive';
import { MapService } from './shared/map.service';
import { GeolocationService } from './shared/geolocation.service';
import { GeocodingService } from './shared/geocoding.service';
import { ContactsComponent } from './contacts/contacts.component';
import { MapComponent } from './map/map.component';
import { LocationResolver } from './location.resolver';
import { StocklistsComponent } from './stocklists/stocklists.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		locationRouting
	],
	declarations: [
		GoogleMapComponent,
		LocationComponent,
		MarkerDirective,
		ContactsComponent,
		MapComponent,
		StocklistsComponent
	],
	providers: [
		MapService,
		GeolocationService,
		GeocodingService,
		LocationResolver
	]
})
export class LocationModule {
}
