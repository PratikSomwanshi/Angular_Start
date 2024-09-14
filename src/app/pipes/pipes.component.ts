import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  price = 20;
  dt = new Date();
  obj = {
    name: 'rohan',
  };
  name = 'rohan';
  num = 11;
}
