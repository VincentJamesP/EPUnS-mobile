import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { Redeem2Component } from "../../components/redeem2/redeem2";

/**
 * Generated class for the Redeem1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "redeem1",
  templateUrl: "redeem1.html"
})
export class Redeem1Component {
  text: string;

  constructor(public navCtrl: NavController) {
    console.log("Hello Redeem1Component Component");
    this.text = "Hello World";
  }

  red() {
    this.navCtrl.push(Redeem2Component);
  }
}
