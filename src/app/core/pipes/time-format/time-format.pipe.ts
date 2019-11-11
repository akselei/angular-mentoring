import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(time: number): string {
    let formatted = '';
    const hours = Math.floor(time / 60);
    const minutes = Math.floor(time) % 60;

    if (hours) {
      formatted += `${hours}h ${minutes} min`;
    } else {
      formatted += `${minutes} min`;
    }

    return formatted;
  }
}
