import { LoginComponent } from '@features/courses/auth/login/login.component';
import { SearchComponent } from '@features/courses/search/search.component';
import { ButtonCoursesComponent } from '@features/courses/button-courses/button-courses.component';
import { CourseItemComponent } from '@features/courses/course-item/course-item.component';
import { CoursesComponent } from '@features/courses/courses.component';
import { BreadcrumbsComponent } from '@features/courses/breadcrumbs/breadcrumbs.component';
import { DeleteDialogComponent } from '@features/dialogs/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '@features/dialogs/edit-dialog/edit-dialog.component';

export const components: any[] = [
  LoginComponent,
  SearchComponent,
  ButtonCoursesComponent,
  CourseItemComponent,
  CoursesComponent,
  BreadcrumbsComponent,
  DeleteDialogComponent,
  EditDialogComponent
];

export * from '@features/courses/auth/login/login.component';
export * from '@features/courses/search/search.component';
export * from '@features/courses/button-courses/button-courses.component';
export * from '@features/courses/course-item/course-item.component';
export * from '@features/courses/courses.component';
export * from '@features/courses/breadcrumbs/breadcrumbs.component';
export * from '@features/dialogs/delete-dialog/delete-dialog.component';
export * from '@features/dialogs/edit-dialog/edit-dialog.component';
