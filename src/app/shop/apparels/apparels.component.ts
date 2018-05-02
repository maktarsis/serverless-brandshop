import {
	Component,
	OnInit,
	Input
} from '@angular/core';
import { Apparel } from '../shared/apparel.interface';
import { CartService } from '../../shared/cart.service';

@Component({
	selector: 'shop-apparels',
	templateUrl: './apparels.component.html',
	styleUrls: ['./apparels.component.scss']
})
export class ApparelsComponent implements OnInit {
	@Input() public apparels: Apparel[];

	constructor(private cartService: CartService) {
	}

	ngOnInit() {
	}

	public addToCart(apparel: Apparel): void {
		this.cartService.addCartApparel(apparel);
	}
}
