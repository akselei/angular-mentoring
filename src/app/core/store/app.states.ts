import { createFeatureSelector } from '@ngrx/store';
import { CoursesState } from '@core/store/courses/reducers/courses.reducer';
import { CourseActionsState } from '@core/store/course-actions/reducers/course-actions.reducer';

import * as auth from '@core/store/auth/reducers/auth.reducer';
import * as courses from '@core/store/courses/reducers/courses.reducer';
import * as courseActions from '@core/store/course-actions/reducers/course-actions.reducer';

export interface AppState {
    authState: auth.State;
    coursesState: courses.CoursesState;
    courseActionsState: courseActions.CourseActionsState;
}

export const reducers = {
    auth: auth.AuthReducer,
    courses: courses.CoursesReducer,
    courseActions: courseActions.CourseActionsReducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectCoursesState = createFeatureSelector<CoursesState>('courses');
export const selectCourseActionsState = createFeatureSelector<CourseActionsState>('course-actions');
