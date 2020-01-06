import { Action } from '@ngrx/store';
import * as courseActions from '../reducers/course-actions.reducer';

export interface AppState {
    courseActionsState: courseActions.CourseActionsState;
}

export enum CourseActionsActionTypes {
    GET_DATA = '[Course Form] Get Data',
    COURSE_DATA_SUCCESS = '[Course Form] Set Data',
    COURSE_DATA_FAILURE = '[Course Form] Error',
    SAVE_DATA = '[Course Form] Save Data',
    SAVE_DATA_SUCCESS = '[Course Form] Save Data Success',
    SAVE_DATA_FAILURE = '[Course Form] Save Data Error'
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

export class SaveData implements Action {
    readonly type = CourseActionsActionTypes.SAVE_DATA;
    constructor(public payload: any) {}
}

export class SaveDataSuccess implements Action {
    readonly type = CourseActionsActionTypes.SAVE_DATA_SUCCESS;
    constructor(public payload: any) {}
}

export class SaveDataFailure implements Action {
    readonly type = CourseActionsActionTypes.SAVE_DATA_FAILURE;
    constructor(public payload: any) {}
}

export type All =
    | GetData
    | CourseDataSuccess
    | CourseDataFailure
    | SaveData
    | SaveDataSuccess
    | SaveDataFailure;
