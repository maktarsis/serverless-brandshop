import { NgModule } from "@angular/core";
import {MatIconModule,
} from "@angular/material";

import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
  MatIconModule,
  FlexLayoutModule,
];

@NgModule({
  exports: modules,
})
export class MaterialModule {}
