import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name = 'john';

  @ViewChild(ChildComponent) child!: ChildComponent;

  getData() {
    this.name = this.child.name;
  }
}
