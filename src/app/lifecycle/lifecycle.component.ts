import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss',
})

// OnInit,
// DoCheck,
// AfterContentInit,
// AfterContentChecked,
// AfterViewInit,
// AfterViewChecked,
// OnDestroy
export class LifecycleComponent {
  @Input() count = 0;

  changeCount() {
    this.count++;
  }

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges ' + changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
