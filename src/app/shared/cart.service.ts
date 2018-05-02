import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Apparel } from '../shop/shared/apparel.interface';

@Injectable()
export class CartService {
	public cartApparels$: BehaviorSubject<Apparel[]> = new BehaviorSubject<Apparel[]>([]);

	constructor() {
	}

	public addCartApparel(apparel: Apparel): void {
		const cartApparels = this.cartApparels$.getValue();
		cartApparels.push(apparel);
		this.cartApparels$.next(cartApparels);
	}

	public deleteCartApparel(apparel: Apparel): void {
		const cartApparels = this.cartApparels$.getValue()
		                         .filter((cartApparel: Apparel) => cartApparel !== apparel);
		this.cartApparels$.next(cartApparels);
	}
}
