import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  template: ''
})
export abstract class BaseComponent implements OnInit {

  onInitMessage: string;

  ngOnInit(): void {
    this.onInitMessage = 'Hello from abstract BaseComponent.ngOnInit()!';
  }

  message(): string {
    return 'Hello from abstract BaseComponent class!';
  }

}
