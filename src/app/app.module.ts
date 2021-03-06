import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbstractClassInheritanceModule } from './abstract-class-inheritance/abstract-class-inheritance.module';
import { AbstractDirectiveInheritanceModule } from './abstract-directive-inheritance/abstract-directive-inheritance.module';
import { AbstractComponentInheritanceModule } from './abstract-component-inheritance/abstract-component-inheritance.module';
import { ComponentExtensionModule } from './component-extension/component-extension.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AbstractClassInheritanceModule,
    AbstractDirectiveInheritanceModule,
    AbstractComponentInheritanceModule,
    ComponentExtensionModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
