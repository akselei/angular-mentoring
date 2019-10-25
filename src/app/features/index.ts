import { LoginComponent } from './courses/auth/login/login.component';
import { LogoutComponent } from './courses/auth/logout/logout.component';
import { SearchComponent } from './courses/search/search.component';
import { ButtonCoursesComponent } from '@features/courses/button-courses/button-courses.component';
import { CourseItemComponent } from '@features/courses/course-item/course-item.component';
import { CoursesComponent } from '@features/courses/courses.component';
import { BreadcrumbsComponent } from '@features/courses/breadcrumbs/breadcrumbs.component';

export const components: any[] = [
  LoginComponent,
  LogoutComponent,
  SearchComponent,
  ButtonCoursesComponent,
  CourseItemComponent,
  CoursesComponent,
  BreadcrumbsComponent
];

export * from './courses/auth/login/login.component';
export * from './courses/auth/logout/logout.component';
export * from './courses/search/search.component';
export * from './courses/button-courses/button-courses.component';
export * from './courses/course-item/course-item.component';
export * from './courses/courses.component';
export * from './courses/breadcrumbs/breadcrumbs.component';
