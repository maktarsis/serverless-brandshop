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
import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ShopService } from './shop.service';
import { Apparels } from './shared/apparels.interface';
import { categories } from './shared/apparels.constants';

@Component({
	selector: 'shop-root',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent implements OnInit, OnDestroy {
	user;
	collection;
	public categories: string[];
	public apparels: Apparels;
	private ngUnsubscribe: Subject<boolean> = new Subject();

	public apparelsCollection: AngularFirestoreDocument<Apparels>;
	public apparels$: Observable<Apparels>;
	public myApparels;
	public category: any;

	constructor(
		private auth: AngularFireAuth,
		private db: AngularFirestore,
		private afs: AngularFirestore,
		private route: ActivatedRoute,
		private cdr: ChangeDetectorRef
	) {
		db.firestore.settings({ timestampsInSnapshots: true });
		this.apparelsCollection = this.afs.collection('apparels').doc('all');
		this.apparels$ = this.apparelsCollection.valueChanges();
	}

	public ngOnInit() {
		this.route.data.subscribe(data => this.category = data.category !== undefined ? data.category : 'all');

		this.categories = categories;

		this.apparels$
		    .takeUntil(this.ngUnsubscribe)
		    .subscribe((allApparels: Apparels) => {
			    this.apparels = allApparels;
			    const flattenApparels = Object.values(allApparels).map(apparels => apparels);
			    this.apparels.all = [].concat.apply([], flattenApparels);
			    this.cdr.markForCheck();
		    });

		// this.auth.authState.subscribe(user => {
		// 	if (user) {
		// 		this.user = user;
		// 		return;
		// 	}
		//
		// 	this.router.navigate(['']);
		// });

	}

	public logout() {
		this.auth.auth.signOut();
	}

	public add(input) {
		if (input.value.length > 0) {
			this.collection.add({
				text: input.value,
				user: this.user.email,
				createdAt: new Date(),
				likes: 0
			});
			input.value = '';
		}
	}

	public like(id: string, previousCount: number) {
		this.collection.doc(id).update({ likes: previousCount + 1 });
	}

	public delete(id: string) {
		this.collection.doc(id).delete();
	}

	public ngOnDestroy(): void {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
