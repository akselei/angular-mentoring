import { LoginComponent } from '@features/auth/login/login.component';
import { SearchComponent } from '@features/courses/search/search.component';
import { CourseItemComponent } from '@features/courses/course-item/course-item.component';
import { CoursesComponent } from '@features/courses/courses.component';
import { BreadcrumbsComponent } from '@features/courses/breadcrumbs/breadcrumbs.component';
import { DeleteDialogComponent } from '@features/dialogs/delete-dialog/delete-dialog.component';
import { AddNewCourseComponent } from '@features/courses/add-new-course/add-new-course.component';
import { DateComponent } from '@features/courses/add-new-course/date/date.component';
import { DurationComponent } from '@features/courses/add-new-course/duration/duration.component';
import { SuggesterComponent } from '@features/courses/add-new-course/suggester/suggester.component';

export const components: any[] = [
    LoginComponent,
    SearchComponent,
    CourseItemComponent,
    CoursesComponent,
    BreadcrumbsComponent,
    DeleteDialogComponent,
    AddNewCourseComponent,
    DateComponent,
    DurationComponent,
    SuggesterComponent
];

export * from '@features/auth/login/login.component';
export * from '@features/courses/search/search.component';
export * from '@features/courses/course-item/course-item.component';
export * from '@features/courses/add-new-course/add-new-course.component';
export * from '@features/courses/courses.component';
export * from '@features/courses/breadcrumbs/breadcrumbs.component';
export * from '@features/dialogs/delete-dialog/delete-dialog.component';
export * from '@features/courses/add-new-course/date/date.component';
export * from '@features/courses/add-new-course/duration/duration.component';
export * from '@features/courses/add-new-course/suggester/suggester.component';
