import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { LoginPage } from "../../pages/login/login";

import { UserProvider } from "../../providers/user/user";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  name = "Angular";
  lname: any;
  fname: any;
  email: any;
  username: any;
  password: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider
  ) {}

  login_link() {
    this.navCtrl.push(LoginPage);
  }

  register(lname, fname, email, username, password) {
    this.fname = this.fname;
    this.lname = this.lname;
    this.email = this.email;
    this.username = this.username;
    this.password = this.password;
    if (
      !this.fname ||
      !this.lname ||
      !this.email ||
      !this.username ||
      !this.password
    ) {
      console.log("error");
    } else {
      console.log(this.fname);
      console.log(this.lname);
      console.log(this.email);
      console.log(this.username);
      console.log(this.password);
      let data: any = this.userProvider
        .postUserAccount(
          this.fname,
          this.lname,
          this.email,
          this.username,
          this.password
        )
        .then(result => {
          console.log(result);
          if (result) {
            this.navCtrl.push(LoginPage);
          } else {
            console.log("error");
          }
        });
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }
}
