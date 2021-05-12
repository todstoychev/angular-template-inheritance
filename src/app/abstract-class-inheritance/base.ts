// import {OnInit} from '@angular/core';

export abstract class Base
// implements OnInit
{
  onInitMessage: string;

  // ngOnInit(): void {
  //   this.onInitMessage = 'Hello from Base.ngOnInit()!';
  // }

  message(): string {
    return 'Hello from abstract Base class!';
  }
}
