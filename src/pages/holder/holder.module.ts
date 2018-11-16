import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolderPage } from './holder';

@NgModule({
  declarations: [
    HolderPage,
  ],
  imports: [
    IonicPageModule.forChild(HolderPage),
  ],
})
export class HolderPageModule {}
