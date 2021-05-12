import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractComponentInheritanceComponent } from './abstract-component-inheritance/abstract-component-inheritance.component';



@NgModule({
  declarations: [
    AbstractComponentInheritanceComponent,
  ],
  exports: [
    AbstractComponentInheritanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AbstractComponentInheritanceModule { }
