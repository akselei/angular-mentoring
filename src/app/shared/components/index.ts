import { LoginComponent } from './authorization/login/login.component';
import { LogoutComponent } from './authorization/logout/logout.component';
import { SearchComponent } from './search/search.component';
import { ButtonCoursesComponent } from '@shared/components/button-courses/button-courses.component';
import { CourseItemComponent } from '@shared/components/course-item/course-item.component';

export const components: any[] = [
  LoginComponent,
  LogoutComponent,
  SearchComponent,
  ButtonCoursesComponent,
  CourseItemComponent
];

export * from './authorization/login/login.component';
export * from './authorization/logout/logout.component';
export * from './search/search.component';
export * from './button-courses/button-courses.component';
export * from './course-item/course-item.component';
