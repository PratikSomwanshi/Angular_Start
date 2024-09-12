import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  name = '';

  @Output() rohan = new EventEmitter<string>();

  sendData() {
    this.rohan.emit(this.name);
  }
}
