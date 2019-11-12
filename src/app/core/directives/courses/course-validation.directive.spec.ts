import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CourseValidationDirective } from '@core/directives/courses/course-validation.directive';

@Component({
  template: `<div class="course__item" [appCourseValidation] = "courseListItem.date">test text</div>`
})

class TestCourseValidationComponent {
    courseListItem = { date: '10 Nov, 2019' };
}

describe('CourseValidationDirective', () => {
    let element: DebugElement;
    let component: TestCourseValidationComponent;
    let fixture: ComponentFixture<TestCourseValidationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CourseValidationDirective, TestCourseValidationComponent]
        });

        fixture = TestBed.createComponent(TestCourseValidationComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.css('div'));
    });

    it('change border color to blue', () => {
        const creationDate = '12 Nov, 2019';

        component.courseListItem.date = creationDate;
        fixture.detectChanges();

        expect(element.nativeElement.style.borderColor).toEqual('rgb(184, 184, 255)');
    });

    it('change border color to green', () => {
        const creationDate = '1 Nov, 2019';

        component.courseListItem.date = creationDate;
        fixture.detectChanges();

        expect(element.nativeElement.style.borderColor).toEqual('rgb(8, 193, 8)');
    });
});
