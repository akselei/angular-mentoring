import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreAuthModule } from '@core/store/auth/store-auth.module';
import { StoreCoursesModule } from '@core/store/courses/store-courses.module';
import { StoreCourseActionsModule } from '@core/store/course-actions/store-course-actions.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreAuthModule,
        StoreCoursesModule,
        StoreCourseActionsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument()
    ]
})
export class MainStoreModule { }
