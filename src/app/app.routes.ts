import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ShopComponent } from "./shop/shop.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "shop",
    pathMatch: "full",
    component: ShopComponent,
  },
  {
    path: "**",
    redirectTo: ""
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
