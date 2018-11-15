import { Component } from '@angular/core';

/**
 * Generated class for the Redeem2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'redeem2',
  templateUrl: 'redeem2.html'
})
export class Redeem2Component {

  text: string;

  constructor() {
    console.log('Hello Redeem2Component Component');
    this.text = 'Hello World';
  }

}
