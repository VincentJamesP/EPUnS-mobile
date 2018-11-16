import { NgModule } from "@angular/core";
import { VirtualcardComponent } from "./virtualcard/virtualcard";
import { Redeem1Component } from "./redeem1/redeem1";
import { Redeem2Component } from "./redeem2/redeem2";
import { Redeem3Component } from "./redeem3/redeem3";
import { UserProvider } from "../providers/user/user";
import { DashboardComponent } from "./dashboard/dashboard";
import { TransactionComponent } from './transaction/transaction';

@NgModule({
  declarations: [
    VirtualcardComponent,
    Redeem1Component,
    Redeem2Component,
    Redeem3Component,
    UserProvider,
    DashboardComponent,
    TransactionComponent
  ],
  imports: [],
  exports: [
    VirtualcardComponent,
    Redeem1Component,
    Redeem2Component,
    Redeem3Component,
    UserProvider,
    DashboardComponent,
    TransactionComponent
  ]
})
export class ComponentsModule {}
