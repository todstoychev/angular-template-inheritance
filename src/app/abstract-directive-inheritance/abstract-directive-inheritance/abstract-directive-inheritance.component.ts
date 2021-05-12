import { Component, OnInit } from '@angular/core';
import {BaseDirective} from '../base.directive';

@Component({
  selector: 'app-abstract-directive-inheritance',
  templateUrl: './abstract-directive-inheritance.component.html',
})
export class AbstractDirectiveInheritanceComponent extends BaseDirective {

  messageText = this.message();
}
