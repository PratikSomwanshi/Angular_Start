import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count = 0;
  disable = false;

  checkCount() {
    if (this.count <= 0) {
      this.disable = true;
      return false;
    }
    return true;
  }

  inc() {
    this.disable = false;
    this.count++;
  }

  dec() {
    if (this.checkCount()) {
      this.count--;
    }
    this.checkCount();
  }

  reset() {
    if (this.count != 0) {
      this.count = 0;
    }
  }
}
