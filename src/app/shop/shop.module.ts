import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { BarComponent } from './bar/bar.component';
import { ApparelsComponent } from './apparels/apparels.component';
import { RouterModule } from '@angular/router';
import { shopRouting } from './shop.routes';
import { ShopResolver } from './shop.resolver';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		shopRouting
	],
	declarations: [ShopComponent, BarComponent, ApparelsComponent],
	providers: [
		ShopResolver
	]
})
export class ShopModule {
}
