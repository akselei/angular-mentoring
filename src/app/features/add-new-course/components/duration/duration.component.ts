import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    }
  ]
})
export class DurationComponent implements ControlValueAccessor {
  @Input() duration;
  @Input() error;
  @ViewChild('durationInput', {static: false}) durationInput: ElementRef;

  durationTime: number;

  constructor() { }
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value): void {
    if (!value || typeof value !== 'string') {
      return;
    }
    this.onChange(value);
  }

  validate({ value }: FormControl) {
    const isNotValid = this.durationTime !== Number(value);
    return isNotValid && {
      invalid: true
    };
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  change(value) {
    this.writeValue(value);
  }
}
