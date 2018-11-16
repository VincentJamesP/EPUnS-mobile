import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { Redeem3Component } from "../../components/redeem3/redeem3";
import { DashboardComponent } from "../../components/dashboard/dashboard";

/**
 * Generated class for the Redeem2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "redeem2",
  templateUrl: "redeem2.html"
})
export class Redeem2Component {
  text: string;

  constructor(public navCtrl: NavController) {
    console.log("Hello Redeem2Component Component");
    this.text = "Hello World";
  }

  main() {
    this.navCtrl.push(DashboardComponent);
  }

  red() {
    this.navCtrl.push(Redeem3Component);
  }
}
