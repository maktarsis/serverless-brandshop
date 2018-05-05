import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { OrdersComponent } from './dialogs/orders/orders.component';
import { CartService } from './cart.service';
import { PaymentComponent } from './dialogs/payment/payment.component';

const sharedModules = [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule];

@NgModule({
	imports: sharedModules,
	exports: sharedModules,
	declarations: [OrdersComponent, PaymentComponent],
	entryComponents: [OrdersComponent, PaymentComponent],
	providers: [CartService]
})
export class SharedModule {
}
