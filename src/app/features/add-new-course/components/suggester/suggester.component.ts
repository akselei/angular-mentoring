import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef, forwardRef,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GetData } from '@core/store/course-actions/actions/course-actions.actions';
import { AppState, selectCourseActionsState } from '@core/store/app.states';
import { Store } from '@ngrx/store';


@Component({
    selector: 'app-suggester',
    templateUrl: './suggester.component.html',
    styleUrls: ['./suggester.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SuggesterComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => SuggesterComponent),
            multi: true
        }]
})
export class SuggesterComponent implements OnInit, ControlValueAccessor {
    @Input() existingId;

    selectable = true;
    removable = true;
    addOnBlur = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    authorCtrl = new FormControl();
    filteredAuthors: Observable<any>;
    authors = [];

    @ViewChild('authorInput', {static: false}) authorInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

    onChange: any = () => {};
    onTouched: any = () => {};

    constructor(
        private store: Store<AppState>,
        private changeDetection: ChangeDetectorRef
    ) { }

    writeValue(value): void {}

    ngOnInit(): void {
        if (this.existingId) {
            this.store.dispatch(new GetData(this.existingId));
            this.store.select(selectCourseActionsState).subscribe(data => {
                if (data.course) {
                    this.authors = data.course.authors;
                }
                this.filteredAuthors = this.authorCtrl.valueChanges.pipe(
                    startWith(null),
                    map((author: string | null) => author ? this._filter(author) : this.authors));
                this.changeDetection.markForCheck();
            });
        } else {
            this.filteredAuthors = this.authorCtrl.valueChanges.pipe(
                startWith(null),
                map((author: string | null) => author ? this._filter(author) : this.authors));
        }
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
        const parsedValue = value.split(' ');

        // Add author
        if ((value || '').trim()) {
            this.authors.push({name: parsedValue[0], lastName: parsedValue[1]});

            this.onChange(this.authors);
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }

        this.authorCtrl.setValue(null);
    }

    remove(author: string): void {
        const index = this.authors.indexOf(author);

        if (index >= 0) {
            this.authors.splice(index, 1);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.authors.push({name: event.option.value.name, lastName: event.option.value.lastName});
        this.authorInput.nativeElement.value = '';
        this.authorCtrl.setValue(null);
    }

    private _filter(value) {
        const filterValue = value.id;
        return this.authors.filter(res => res.id === filterValue);
    }

    validate({ value }: FormControl) {}

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
