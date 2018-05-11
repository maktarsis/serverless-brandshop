// import {
// 	ChangeDetectionStrategy,
// 	Component,
// 	OnInit
// } from '@angular/core';
//
// import { Router } from '@angular/router';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
//
// @Component({
// 	selector: 'app-auth',
// 	templateUrl: './auth.component.html',
// 	styleUrls: ['./auth.component.scss'],
// 	changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class AuthComponent implements OnInit {
//
// 	constructor(private auth: AngularFireAuth) {
// 		// this.auth.authState.subscribe(state => {
// 		// 	if (!state) {
// 		// 		return;
// 		// 	}
// 		//
// 		// 	this.router.navigate(['']);
// 		// })
// 	}
//
// 	ngOnInit() {
// 	}
//
// 	public login(form: { email: string, password: string}) {
// 		this.auth.auth.signInWithCredential(firebase.auth.EmailAuthProvider.credential(
// 			form.email,
// 			form.password,
// 		));
// 	}
//
// 	public signup(form: { email: string, password: string}) {
// 		this.auth.auth.createUserWithEmailAndPassword(form.email, form.password);
// 	}
// }
