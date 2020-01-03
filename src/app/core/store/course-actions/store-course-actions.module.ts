import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CourseActionsReducer } from '@core/store/course-actions/reducers/course-actions.reducer';
import { CourseActionsEffects } from '@core/store/course-actions/effects/course-actions.effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('course-actions', CourseActionsReducer),
        EffectsModule.forFeature([CourseActionsEffects])
    ],
    providers: [CourseActionsEffects]
})
export class StoreCourseActionsModule {}
