import { Directive, OnInit } from '@angular/core';

@Directive()
export abstract class BaseDirective implements OnInit {

  onInitMessage: string;

  ngOnInit(): void {
    this.onInitMessage = 'Hello from abstract BaseDirective.ngOnInit()!';
  }

  message(): string {
    return 'Hello from abstract BaseDirective class!';
  }
}


