import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from '@features/courses/courses.component';
import { LoginComponent } from '@features/auth/login/login.component';
import { AddNewCourseComponent } from '@features/add-new-course/components/add-new-course.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', data: { breadcrumb: 'Courses' },
    children: [
      { path: '', component: CoursesComponent },
      { path: 'add-course', component: AddNewCourseComponent, data: { breadcrumb: 'New Course' } },
      { path: ':id', component: AddNewCourseComponent, data: { breadcrumb: 'Edit Course' } }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
