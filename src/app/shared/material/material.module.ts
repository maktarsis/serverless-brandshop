import { NgModule } from '@angular/core';
import {
	MatIconModule,
	MatDialogModule,
	MatButtonModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
	MatIconModule,
	MatDialogModule,
	MatButtonModule,
	FlexLayoutModule
];

@NgModule({
	exports: modules
})
export class MaterialModule {
}
