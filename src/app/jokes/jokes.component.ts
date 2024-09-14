import { Component } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.scss',
})
export class JokesComponent {
  ola: any[] = [];

  constructor(private js: JokesService) {
    this.js.getData().subscribe((data: any) => (this.ola = data));
  }
}
