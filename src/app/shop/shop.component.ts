import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import {
  Observable,
  Subject,
  pipe
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Apparels } from './shared/apparels.interface';
import { categories } from './shared/apparels.constants';

@Component({
  selector: 'shop-feat',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent implements OnInit, OnDestroy {
  public apparels: Apparels;
  public apparelsCollection: AngularFirestoreDocument<Apparels>;
  public apparels$: Observable<Apparels>;
  public category: string;
  public categories: string[];
  public loading: boolean;
  private ngUnsubscribe: Subject<boolean> = new Subject();

  constructor(
      private afs: AngularFirestore,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef
  ) {
    this.apparelsCollection = this.afs.collection('apparels').doc('all');
    this.apparels$ = this.apparelsCollection.valueChanges();

  }

  public ngOnInit() {
    this.route.data
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data: { category: string }) => {
          this.loading = this.apparels === undefined;
          this.category = data.category === undefined ? 'all' : data.category;
        });

    this.categories = categories;

    this.apparels$
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((allApparels: Apparels) => {
          this.apparels = allApparels;
          const flattenApparels = Object.values(allApparels).map(apparels => apparels);
          this.apparels.all = [].concat.apply([], flattenApparels);
          this.loading = false;
          this.cdr.detectChanges();
        });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
