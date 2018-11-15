import { NgModule } from '@angular/core';
import { VirtualcardComponent } from './virtualcard/virtualcard';
import { Redeem1Component } from './redeem1/redeem1';
import { Redeem2Component } from './redeem2/redeem2';
@NgModule({
	declarations: [VirtualcardComponent,
    Redeem1Component,
    Redeem2Component],
	imports: [],
	exports: [VirtualcardComponent,
    Redeem1Component,
    Redeem2Component]
})
export class ComponentsModule {}
