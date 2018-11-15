import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { VirtualcardComponent } from "../components/virtualcard/virtualcard";
import { Redeem1Component } from "../components/redeem1/redeem1";
import { Redeem2Component } from "../components/redeem2/redeem2";

import { UserProvider } from "../providers/user/user";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VirtualcardComponent,
    Redeem1Component,
    Redeem2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VirtualcardComponent,
    Redeem1Component,
    Redeem2Component
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserProvider
  ]
})
export class AppModule {}
