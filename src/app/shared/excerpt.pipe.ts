import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt',
})
export class ExcerptPipe implements PipeTransform {
  transform(value: string = '', numberOfWords: number): string {
    return value.split(' ').slice(0, numberOfWords).join(' ') + '...';
  }
}
