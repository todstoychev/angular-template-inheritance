import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractClassInheritanceComponent } from './abstract-class-inheritance/abstract-class-inheritance.component';


@NgModule({
  declarations: [
    AbstractClassInheritanceComponent
  ],
  exports: [
    AbstractClassInheritanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AbstractClassInheritanceModule {
}
