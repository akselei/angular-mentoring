import { Action } from '@ngrx/store';
import * as courseActions from '../reducers/course-actions.reducer';

export interface AppState {
    courseActionsState: courseActions.CourseActionsState;
}

export enum CourseActionsActionTypes {
    GET_DATA = '[Course Form] Get Data',
    COURSE_DATA_SUCCESS = '[Course Form] Set Data',
    COURSE_DATA_FAILURE = '[Course Form] Error'
}

export class GetData implements Action {
    readonly type = CourseActionsActionTypes.GET_DATA;
    constructor(public payload: any) {}
}

export class CourseDataSuccess implements Action {
    readonly type = CourseActionsActionTypes.COURSE_DATA_SUCCESS;
    constructor(public payload: any) {}
}

export class CourseDataFailure implements Action {
    readonly type = CourseActionsActionTypes.COURSE_DATA_FAILURE;
    constructor(public payload: any) {}
}

export type All =
    | GetData
    | CourseDataSuccess
    | CourseDataFailure;
