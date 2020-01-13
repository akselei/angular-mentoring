import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
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
    }]
})
export class DateComponent implements ControlValueAccessor {
  @Input() existingDate;
  events: string[] = [];

  constructor() { }

  addNewDate(event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${event.value}`);
    this.writeValue(this.events);
  }

  writeValue(value): void {
    this.onChange(value[0]);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
