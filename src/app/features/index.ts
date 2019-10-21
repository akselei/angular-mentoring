import { LoginComponent } from './authorization/login/login.component';
import { LogoutComponent } from './authorization/logout/logout.component';
import { SearchComponent } from './courses/search/search.component';
import { ButtonCoursesComponent } from '@features/courses/button-courses/button-courses.component';
import { CourseItemComponent } from '@features/courses/course-item/course-item.component';

export const components: any[] = [
  LoginComponent,
  LogoutComponent,
  SearchComponent,
  ButtonCoursesComponent,
  CourseItemComponent
];

export * from './authorization/login/login.component';
export * from './authorization/logout/logout.component';
export * from './courses/search/search.component';
export * from './courses/button-courses/button-courses.component';
export * from './courses/course-item/course-item.component';
