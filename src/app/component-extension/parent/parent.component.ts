import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges {

  @Input() name: string;

  messageText: string;

  ngOnChanges(): void {
    this.messageText = this.message();
  }

  protected message(): string {
    return `Hello from ${this.name}!`;
  }
}
