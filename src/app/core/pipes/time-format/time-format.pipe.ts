import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(time: number): string {
    let formatted = '';
    const hours = Math.floor(time / 60);
    const minutes = Math.floor(time) % 60;

    formatted += hours ? `${hours}h ${minutes} min` : `${minutes} min`;

    return formatted;
  }
}
