import {
	Component,
	OnInit,
	Input
} from '@angular/core';
import { Apparel } from '../shared/apparel.interface';

@Component({
	selector: 'shop-apparels',
	templateUrl: './apparels.component.html',
	styleUrls: ['./apparels.component.scss']
})
export class ApparelsComponent implements OnInit {
	@Input() public apparels: Apparel[];

	constructor() {
	}

	ngOnInit() {
	}

}
