import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { Redeem1Component } from "../../components/redeem1/redeem1";
import { VirtualcardComponent } from "../../components/virtualcard/virtualcard";
import { TransactionComponent } from "../transaction/transaction";
/**
 * Generated class for the DashboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "dashboard",
  templateUrl: "dashboard.html"
})
export class DashboardComponent {
  text: string;

  name = "angular";
  constructor(public navCtrl: NavController) {}

  TopUp() {
    this.navCtrl.push(Redeem1Component);
  }
  Transac() {
    this.navCtrl.push(TransactionComponent);
  }
  Vcard() {
    this.navCtrl.push(VirtualcardComponent);
  }
}
