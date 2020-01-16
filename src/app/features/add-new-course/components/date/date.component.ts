import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => DateComponent),
          multi: true
        }
    ]
})
export class DateComponent implements ControlValueAccessor {
  @Input() existingDate;
  @Input() error;

    date: string;
    events: string[] = [];

    constructor() { }

    addNewDate(event: MatDatepickerInputEvent<any>) {
        const formattedDate = JSON.stringify(event.value).replace(/[`~!@#$%^&*()_|+\=?;'",<>\{\}\[\]\\\/]/gi, '');
        this.onChange(formattedDate);
    }

    writeValue(value): void {}

    onChange: any = () => {};
    onTouched: any = () => {};

    registerOnChange(fn) {
    this.onChange = fn;
    }

    registerOnTouched(fn) {
    this.onTouched = fn;
    }
}
