import {
	ChangeDetectionStrategy,
	Component
} from '@angular/core';

@Component({
	selector: 'location-root',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent {
}
