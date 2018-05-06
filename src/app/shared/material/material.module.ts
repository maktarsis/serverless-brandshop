import { NgModule } from '@angular/core';
import {
	MatIconModule,
	MatDialogModule,
	MatButtonModule,
	MatInputModule,
	MatTooltipModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
	MatIconModule,
	MatDialogModule,
	MatButtonModule,
	MatInputModule,
	MatTooltipModule,
	FlexLayoutModule
];

@NgModule({
	exports: modules
})
export class MaterialModule {
}
