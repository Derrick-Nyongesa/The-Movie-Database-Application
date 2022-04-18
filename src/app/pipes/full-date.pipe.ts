import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullDate',
})
export class FullDatePipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      const dateArray = value.split('-');
      const date = dateArray[2].substr(0, 1);
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      return `${date} ${months[dateArray[1] - 1]} ${dateArray[0]}`;
    }
  }
}
