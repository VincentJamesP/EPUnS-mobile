import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { DashboardComponent } from "../../components/dashboard/dashboard";

/**
 * Generated class for the Redeem3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "redeem3",
  templateUrl: "redeem3.html"
})
export class Redeem3Component {
  text: string;

  constructor(public navCtrl: NavController) {
    console.log("Hello Redeem3Component Component");
    this.text = "Hello World";
  }

  main() {
    this.navCtrl.push(DashboardComponent);
  }

  red() {
    this.navCtrl.push(Redeem3Component);
  }
}
