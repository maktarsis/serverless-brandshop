import {
	ChangeDetectionStrategy,
	Component
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

	constructor(
		public router: Router
	) {
	}
}
