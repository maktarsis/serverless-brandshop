import {
	Component,
	OnInit
} from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { Apparel } from '../../shop/shared/apparel.interface';

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
	public cartApparels: Apparel[];
	public subtotal: number;

	constructor(private cartService: CartService) {
	}

	ngOnInit() {
		this.cartService.cartApparels$.subscribe((apparels: Apparel[]) => {
			this.cartApparels = apparels;
			this.subtotal = this.calcSubtotal(apparels);
		});
	}

	public deleteCartApparel(apparel: Apparel): void {
		const decision = confirm('Are you really want to delete this stuff?');

		if (!decision) {
			return;
		}

		this.cartService.deleteCartApparel(apparel);
	}

	public checkout(apparels: Apparel[], subtotal: number): void {
		alert(`Do you want to buy this stuff for ${subtotal}?`);
	}

	private calcSubtotal(apparels: Apparel[]): number {
		if (apparels.length === 0) {
			return;
		}

		let sum = 0;
		apparels.forEach((apparel: Apparel) => sum += apparel.price);

		return sum;
	}
}
