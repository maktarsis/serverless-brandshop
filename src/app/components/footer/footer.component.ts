import {
	ChangeDetectionStrategy,
	Component
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrdersComponent } from '../../shared/dialogs/orders/orders.component';
import {
	returnPolicy,
	shippingHandling
} from '../../shared/constants/shop-rules.constants';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

	constructor(public dialog: MatDialog) {
	}

	public openShippingHandling(): void {
		const dialogRef = this.dialog.open(OrdersComponent, {
			height: '500px',
			width: '600px',
			data: shippingHandling
		});
	}

	public openReturnPolicy(): void {
		const dialogRef = this.dialog.open(OrdersComponent, {
			height: '500px',
			width: '600px',
			data: returnPolicy
		});
	}
}
