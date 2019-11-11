import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appCourseValidation]'
})

export class CourseValidationDirective implements OnInit {
    @Input('appCourseValidation') date: any;

    currentDate = new Date().getTime();
    limitDates = new Date().setDate(new Date().getDate() - 14); // 14 days for showing item

    constructor(private element: ElementRef) { }

    ngOnInit() {
        this.setTimeRules();
    }

    public setTimeRules(): void {
        const creationDate = new Date(this.date.split(',')).getTime();

        if (creationDate < this.currentDate && creationDate >= this.limitDates) {
            this.element.nativeElement.style.borderColor = '#08c108'; // Green
        } else if (creationDate > this.currentDate) {
            this.element.nativeElement.style.borderColor = '#b8b8ff'; // Blue
        }
    }
}
