import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { DashboardComponent } from "../../components/dashboard/dashboard";

/**
 * Generated class for the TransactionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "transaction",
  templateUrl: "transaction.html"
})
export class TransactionComponent {
  text: string;

  constructor(public navCtrl: NavController) {
    console.log("Hello TransactionComponent Component");
    this.text = "Hello World";
  }

  main() {
    this.navCtrl.push(DashboardComponent);
  }
}
