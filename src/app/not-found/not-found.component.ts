import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  isLoading: boolean = true; // Loader visible initially

  // Hide loader when iframe has loaded
  onIframeLoad() {
    this.isLoading = false;
  }
}
