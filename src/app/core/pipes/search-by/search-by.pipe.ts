import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '@features/courses/models/courses.model';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {

  transform(data: ICourse[], value: string): ICourse[] {
    if (!value) { return data; }

    return data.filter((course: ICourse) => {
      return course.name.toLowerCase().trim().indexOf(value.toLowerCase().trim()) > -1;
    });
  }
}
