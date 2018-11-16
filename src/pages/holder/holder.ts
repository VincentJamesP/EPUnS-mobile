import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav } from "ionic-angular";
import { Platform } from "ionic-angular";

import { DashboardComponent } from "../../components/dashboard/dashboard";
import { VirtualcardComponent } from "../../components/virtualcard/virtualcard";

/**
 * Generated class for the HolderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-holder",
  templateUrl: "holder.html"
})
export class HolderPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = DashboardComponent;

  pages: Array<{ title: string; component: any }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform
  ) {
    this.pages = [
      { title: "Dashboard", component: DashboardComponent },
      { title: "Virtual Card", component: VirtualcardComponent },
      { title: "Transactions", component: VirtualcardComponent },
      { title: "Redeem", component: VirtualcardComponent }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserappPage");

    // document.getElementById('tab-t0-0').innerHTML = '<ion-icon name="locate"></ion-icon>Locate';
    // document.getElementById('tab-t0-1').innerHTML = '<ion-icon name="calendar"></ion-icon>';
    // document.getElementById('tab-t0-2').innerHTML = '<ion-icon name="contact"></ion-icon>';
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
