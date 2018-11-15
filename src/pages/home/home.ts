import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { Redeem1Component } from "../../components/redeem1/redeem1";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  name = "angular";
  constructor(public navCtrl: NavController) {}

  TopUp() {
    this.navCtrl.push(Redeem1Component);
  }
  Transac() {
    this.navCtrl.push(Redeem1Component);
  }
  Redeem() {
    this.navCtrl.push(Redeem1Component);
  }
}
