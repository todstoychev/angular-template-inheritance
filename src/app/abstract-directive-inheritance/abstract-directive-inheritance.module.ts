import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractDirectiveInheritanceComponent } from './abstract-directive-inheritance/abstract-directive-inheritance.component';



@NgModule({
  declarations: [
    AbstractDirectiveInheritanceComponent,
  ],
  exports: [
    AbstractDirectiveInheritanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AbstractDirectiveInheritanceModule { }
