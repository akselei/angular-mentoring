import { Directive } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
    selector: '[appDateValidator]'
})
export class DateValidatorDirective {

    constructor() { }

    static DateValidation({ value }: FormControl): { [key: string]: any } {
        const DatePattern =  /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/; // 1/13/2020 format required
        const restrictedDate = new Date(value).toLocaleDateString('en-US');

        return !!restrictedDate.match(DatePattern) ? null : { dateInvalid: true };
    }
}
