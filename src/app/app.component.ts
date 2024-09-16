import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showNav = true;
  name = 'john';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNav = event.url != '/not-found';
      }
    });
  }

  @ViewChild(ChildComponent) child!: ChildComponent;

  getData() {
    this.name = this.child.name;
  }
}
