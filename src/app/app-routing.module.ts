import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from '@features/courses/courses.component';
import { LoginComponent } from '@features/auth/login/login.component';
import { AuthGuardService } from '@core/services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', data: { breadcrumb: 'Courses' },
    children: [
      { path: '',
          component: CoursesComponent },
      { path: 'add-course',
          loadChildren: () => import('@features/add-new-course/add-new-course.module').then(m => m.AddNewCourseModule),
          data: { breadcrumb: 'New Course' },
          canActivate: [AuthGuardService] },
      { path: ':id',
          loadChildren: () => import('@features/add-new-course/add-new-course.module').then(m => m.AddNewCourseModule),
          data: { breadcrumb: 'Edit Course' },
          canActivate: [AuthGuardService] }
    ]
  },
  { path: 'login',
      loadChildren: () => import('@features/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
