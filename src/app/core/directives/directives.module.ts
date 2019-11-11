import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseValidationDirective } from '@core/directives/courses/course-validation.directive';

@NgModule({
  declarations: [ CourseValidationDirective],
  imports: [ CommonModule ],
  exports: [ CourseValidationDirective]
})
export class DirectivesModule { }
