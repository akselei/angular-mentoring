import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseValidationDirective } from '@core/directives/courses/course-validation.directive';
import { DateValidatorDirective } from '@core/directives/validation/date.validator';

@NgModule({
  declarations: [ CourseValidationDirective, DateValidatorDirective ],
  imports: [ CommonModule ],
  exports: [ CourseValidationDirective, DateValidatorDirective ]
})
export class DirectivesModule { }
