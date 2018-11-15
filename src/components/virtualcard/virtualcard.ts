import { Component } from '@angular/core';

/**
 * Generated class for the VirtualcardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'virtualcard',
  templateUrl: 'virtualcard.html'
})
export class VirtualcardComponent {

  text: string;

  constructor() {
    console.log('Hello VirtualcardComponent Component');
    this.text = 'Hello World';
  }

}
