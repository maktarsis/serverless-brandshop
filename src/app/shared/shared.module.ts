import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material/material.module";

const sharedModules = [CommonModule, MaterialModule];

@NgModule({
  imports: sharedModules,
  exports: sharedModules
})
export class SharedModule {}
