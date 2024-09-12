import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrl: './props.component.scss',
})
export class PropsComponent {
  @Input() name!: string;
}
