import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { Redeem2Component } from "../../components/redeem2/redeem2";

import { UserProvider } from "../../providers/user/user";

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
  name = "Angular";
  cardnum: any;

  constructor(
    public navCtrl: NavController,
    public userProvider: UserProvider
  ) {
    console.log("Hello Redeem1Component Component");
    this.text = "Hello World";
  }

  red(cardnum) {
    //sa dri nga part gn equate mo xa sa iya self so ok xa gle
    this.cardnum = this.cardnum;
    if (!this.cardnum) {
      console.log("error");
    } else {
      console.log(this.cardnum);

      //use ang local variable
      let data: any = this.userProvider
        .getCardNum(this.cardnum)
        .then(result => {
          console.log(result);
          if (result) {
            this.navCtrl.push(Redeem2Component);
            console.log("success");
          } else {
            console.log("error");
          }
        });
    }
  }
}
