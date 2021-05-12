import {Component, OnInit} from '@angular/core';
import {Base} from '../base';

@Component({
  selector: 'app-abstract-class-inheritance',
  templateUrl: './abstract-class-inheritance.component.html'
})
export class AbstractClassInheritanceComponent extends Base {

  messageText = this.message();

}
