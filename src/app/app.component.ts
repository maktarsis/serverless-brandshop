import {
	ChangeDetectionStrategy,
	Component
} from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
    <app-header></app-header>
    <!-- <home-feat></home-feat> -->
    <router-outlet></router-outlet>
    <!--<app-footer></app-footer>-->
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
