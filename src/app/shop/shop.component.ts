import {
	Component,
	OnInit,
	OnDestroy
} from '@angular/core';

import {
	ActivatedRoute,
	Router
} from '@angular/router';
import {
	AngularFirestore,
	AngularFirestoreDocument
} from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';


import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ShopService } from './shop.service';
import { Apparels } from './interfaces/apparels.interface';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss'],
	providers: [ShopService]
})
export class ShopComponent implements OnInit, OnDestroy {
	user;
	collection;
	public categories: string[];
	public apparels: any[] = [];
	private ngUnsubscribe: Subject<boolean> = new Subject();

	public apparelsCollection: AngularFirestoreDocument<Apparels>;
	public apparels$: Observable<Apparels>;
	public myApparels;

	constructor(
		private auth: AngularFireAuth,
		private db: AngularFirestore,
		private afs: AngularFirestore,
		private shopService: ShopService
	) {
		this.apparelsCollection = this.afs.collection('apparels').doc('all');
		this.apparels$ = this.apparelsCollection.valueChanges();
	}

	public ngOnInit() {
		// TODO: RESOLVER
		// const categories1 = this.route.snapshot.data['category'];
		// console.log(categories1);
		this.categories = [
			'Accessories',
			'Jackets',
			'Pants',
			'Sneakers',
			'Sweaters',
			'T-Shirts',
			'SALE'
		];


		this.apparels$
		    .takeUntil(this.ngUnsubscribe)
		    .subscribe(allApparels => {
			    const flattenApparels = Object.values(allApparels).map(apparels => apparels);
			    this.apparels = [].concat.apply([], flattenApparels);
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
