import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Resolve,
	RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class ShopResolver implements Resolve<any> {

	resolve(route: ActivatedRouteSnapshot,
	        state: RouterStateSnapshot): any {
		const category = route.paramMap.get('category');
		console.log('resolver', category);
		return route.params.category;
	}
}