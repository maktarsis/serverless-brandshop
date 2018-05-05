import {
	ChangeDetectionStrategy,
	Component
} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
	selector: 'location-root',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent {

}