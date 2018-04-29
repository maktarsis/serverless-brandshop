import {
	Component,
	OnInit,
	Input
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'shop-bar',
	templateUrl: './bar.component.html',
	styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
	@Input() public categories: string[];

	constructor(private router: Router) {
	}

	ngOnInit() {
	}

	public goTo(category): void {
		// this.router.navigate(['shop', ]);
		// this.router.navigateByUrl(`shop/${category}`);
	}

}
