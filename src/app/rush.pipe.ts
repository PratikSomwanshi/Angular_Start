import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rush',
})
export class RushPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value % 2 == 0) {
      return 'even';
    }
    return 'odd';
  }
}
