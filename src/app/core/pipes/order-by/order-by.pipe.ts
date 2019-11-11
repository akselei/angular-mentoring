import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '@features/courses/models/courses.model';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(array: ICourse[]): ICourse[] {
        array = array || [];
        array.sort((a: ICourse, b: ICourse): any => {
            const first: number = Date.parse(a.date);
            const second: number = Date.parse(b.date);

            if (first < second) {
                return -1;
            } else if (first > second) {
                return 1;
            } else {
                return 0;
            }
        });

        return array;
    }
}
