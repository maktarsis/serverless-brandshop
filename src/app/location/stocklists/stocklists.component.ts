import {
	ChangeDetectionStrategy,
	Component,
	OnInit
} from '@angular/core';

@Component({
  selector: 'app-stocklists',
  templateUrl: './stocklists.component.html',
  styleUrls: ['./stocklists.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StocklistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
