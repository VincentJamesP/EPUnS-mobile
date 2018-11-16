import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { UserProvider } from "../../providers/user/user";

import { RegisterPage } from "../../pages/register/register";

import { Storage } from "@ionic/storage";
import { DashboardComponent } from "../../components/dashboard/dashboard";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  name = "Angular";
  username: any;
  password: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider,
    public storage: Storage
  ) {}

  signup_link() {
    this.navCtrl.push(RegisterPage);
  }

  login(username, password) {
    let data: any = this.userProvider
      .getUserAccount(username, password)
      .then(result => {
        if (result) {
          this.navCtrl.push(DashboardComponent);
          console.log(result);
          console.log("success");
        } else {
          console.log("error");
        }
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
}
