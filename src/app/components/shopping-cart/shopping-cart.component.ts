import {
	ChangeDetectionStrategy,
	Component,
	OnDestroy,
	OnInit
} from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { Apparel } from '../../shop/shared/apparel.interface';
import { MatDialog } from '@angular/material';
import { PaymentComponent } from '../../shared/dialogs/payment/payment.component';
import { Contact } from '../../shared/interfaces/contact.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
	public cartApparels: Apparel[];
	public subtotal: number;
	private subscription: any;
	private contact: Contact;

	constructor(
		private cartService: CartService,
		private dialog: MatDialog,
		private router: Router
	) {
	}

	public ngOnInit(): void {
		this.subscription = this.cartService.cartApparels$.subscribe((apparels: Apparel[]) => {
			this.cartApparels = apparels;
			this.subtotal = this.calcSubtotal(apparels);
		});
	}

	public deleteCartApparel(apparel: Apparel): void {
		this.cartService.deleteCartApparel(apparel);
	}

	public checkout(subtotal: number): void {
		const dialogRef = this.dialog.open(PaymentComponent, {
			height: '500px',
			width: '600px'
		});

		dialogRef.afterClosed().subscribe((contact: Contact) => {
			this.contact = contact;
			this.router.navigate(['']);
		});
	}

	private calcSubtotal(apparels: Apparel[]): number {
		return apparels.reduce((result: number, apparel: Apparel) => result + apparel.price, 0);
	}

	public ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
