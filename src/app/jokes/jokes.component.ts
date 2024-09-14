import { Component } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.scss',
})
export class JokesComponent {
  ola: any[] = [];
  loading = false;

  constructor(private js: JokesService) {}

  getData() {
    this.loading = true;
    this.js.getData().subscribe(
      (data: any) => {
        this.ola = data;
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
