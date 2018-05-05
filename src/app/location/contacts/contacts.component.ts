import {
	ChangeDetectionStrategy,
	Component,
	OnInit
} from '@angular/core';

@Component({
  selector: 'location-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
