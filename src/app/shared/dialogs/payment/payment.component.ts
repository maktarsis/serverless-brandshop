import {
	ChangeDetectionStrategy,
	Component,
	OnInit
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Contact } from '../../interfaces/contact.interface';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: ['./payment.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent implements OnInit {
	public form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<PaymentComponent>
	) {
	}

	ngOnInit() {
		this.form = this.fb.group({
			name: ['', [Validators.required, Validators.minLength(3)]],
			phone: [
				'', [
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(11)
				]
			],
			email: [
				'',
				[
					Validators.required,
					Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
				]
			]
		});
	}

	public payment(form: FormGroup): void {
		if (form.invalid) {
			return;
		}

		const contact: Contact = form.value;
		this.dialogRef.close(contact);
	}
}
