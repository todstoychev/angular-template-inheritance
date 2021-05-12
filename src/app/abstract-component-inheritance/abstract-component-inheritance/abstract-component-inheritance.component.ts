import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-abstract-component-inheritance',
  templateUrl: './abstract-component-inheritance.component.html'
})
export class AbstractComponentInheritanceComponent extends BaseComponent {

  messageText = this.message();

}
