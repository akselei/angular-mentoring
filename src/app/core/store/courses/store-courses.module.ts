import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoursesEffects } from '@core/store/courses/effects/courses.effects';
import { CoursesReducer } from '@core/store/courses/reducers/courses.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('courses', CoursesReducer),
        EffectsModule.forFeature([CoursesEffects])
    ],
    providers: [CoursesEffects]
})
export class StoreCoursesModule {}
