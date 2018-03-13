import { Component, Output, OnInit, OnDestroy } from "@angular/core";

import { MnFullpageOptions, MnFullpageService } from "ngx-fullpage";
import * as $ from "jquery";

@Component({
  selector: "home-feat",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  // @Output() public options: MnFullpageOptions = new MnFullpageOptions({
  //   navigation: true,
  //   keyboardScrolling: true
  // });

  constructor(
    // public fullpageService: MnFullpageServiceА
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.fullpageService.destroy('all');
  }
}
