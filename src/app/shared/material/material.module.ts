import { NgModule } from '@angular/core';
import {
	MatIconModule,
	MatDialogModule,
	MatButtonModule,
	MatInputModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
	MatIconModule,
	MatDialogModule,
	MatButtonModule,
	MatInputModule,
	FlexLayoutModule
];

@NgModule({
	exports: modules
})
export class MaterialModule {
}
