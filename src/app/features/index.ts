import { SearchComponent } from '@features/courses/search/search.component';
import { CourseItemComponent } from '@features/courses/course-item/course-item.component';
import { CoursesComponent } from '@features/courses/courses.component';
import { BreadcrumbsComponent } from '@features/courses/breadcrumbs/breadcrumbs.component';
import { DeleteDialogComponent } from '@features/dialogs/delete-dialog/delete-dialog.component';


export const components: any[] = [
    SearchComponent,
    CourseItemComponent,
    CoursesComponent,
    BreadcrumbsComponent,
    DeleteDialogComponent
];

export * from '@features/courses/search/search.component';
export * from '@features/courses/course-item/course-item.component';
export * from '@features/courses/courses.component';
export * from '@features/courses/breadcrumbs/breadcrumbs.component';
export * from '@features/dialogs/delete-dialog/delete-dialog.component';
