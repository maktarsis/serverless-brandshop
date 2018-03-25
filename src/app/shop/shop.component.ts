import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
	items;
	user;
	collection;

	constructor(private router: Router, private auth: AngularFireAuth, private db: AngularFirestore) {
	}

	ngOnInit() {
		this.collection = this.db.collection('items');
		this.items = this.collection.snapshotChanges().map(items => (
			items.map(item => {
				const data = item.payload.doc.data();
				const id = item.payload.doc.id;
				return { id, ...data };
			})
		));

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
				likes: 0,
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
}
