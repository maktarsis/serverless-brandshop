import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

// import { MnFullpageModule } from "ngx-fullpage"; 
// MnFullpageModule.forRoot()

import { HomeComponent } from "./home.component";
import { EntranceComponent } from "./entrance/entrance.component";

@NgModule({
  imports: [CommonModule, RouterModule, ],
  declarations: [HomeComponent, EntranceComponent],
  exports: [HomeComponent, EntranceComponent]
})
export class HomeModule {}
