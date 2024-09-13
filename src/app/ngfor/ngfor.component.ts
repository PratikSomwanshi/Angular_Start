import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.scss',
})
export class NgforComponent {
  users!: any;

  constructor() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        this.users = json;
      });
  }

  names = [
    {
      title: 'PS5',
      price: 45000,
    },
    {
      title: 'Xbox Series X',
      price: 50000,
    },
    {
      title: 'Nintendo Switch',
      price: 30000,
    },
  ];
}
