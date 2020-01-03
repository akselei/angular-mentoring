import { All, CourseActionsActionTypes } from '@core/store/course-actions/actions/course-actions.actions';
import { IAddCourse } from '@features/add-new-course/models/add-course.model';

export interface CourseActionsState {
    isCourseAdded: boolean;
    course: IAddCourse[] | null;
    errorMessage: string | null;
}

export const initialState: CourseActionsState = {
    isCourseAdded: false,
    course: null,
    errorMessage: null
};

export function CourseActionsReducer(state = initialState, action: All): CourseActionsState {
    switch (action.type) {
        case CourseActionsActionTypes.COURSE_DATA_SUCCESS: {
            return {
                ...state,
                course: !!action.payload ? action.payload.courses : [],
                errorMessage: null
            };
        }
        case CourseActionsActionTypes.COURSE_DATA_FAILURE: {
            return {
                ...state,
                errorMessage: 'Invalid data'
            };
        }
        default: {
            return state;
        }
    }
}
