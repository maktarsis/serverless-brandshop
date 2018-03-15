import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "./shared/shared.module";

import { appRouting } from "./app.routes";
import { HomeModule } from "./home/home.module";
import { ShopModule } from "./shop/shop.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
      BrowserModule.withServerTransition({appId: 'app-root'}),
    RouterModule,
    SharedModule,
    appRouting,
    HomeModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
