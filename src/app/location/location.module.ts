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

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		locationRouting
	],
	declarations: [
		GoogleMapComponent,
		LocationComponent,
		MarkerDirective
	],
	providers: [
		MapService,
		GeolocationService,
		GeocodingService
	]
})
export class LocationModule {
}
