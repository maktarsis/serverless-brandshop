import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Apparel } from '../shop/shared/apparel.interface';

@Injectable()
export class CartService {
	public cartApparels$: BehaviorSubject<Apparel[]> = new BehaviorSubject<Apparel[]>([]);
	public cartApparelsCast$ = this.cartApparels$.asObservable().share();

	constructor() {
		this.updateLS();
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

	private updateLS(): void {
		const apparelsInLS: Apparel[] = JSON.parse(localStorage.getItem('cart'));

		if (apparelsInLS !== undefined && apparelsInLS !== null && apparelsInLS.length > 0) {
			this.cartApparels$.next(apparelsInLS);
		}

		this.cartApparelsCast$.subscribe((apparels: Apparel[]) => {
			localStorage.setItem('cart', JSON.stringify(apparels));
		});
	}
}
