import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
    CourseActionsActionTypes,
    CourseDataFailure,
    CourseDataSuccess,
    GetData, SaveData, SaveDataFailure, SaveDataSuccess
} from '@core/store/course-actions/actions/course-actions.actions';
import { CourseService } from '@features/services/course/course.service';

@Injectable()
export class CourseActionsEffects {
    constructor(
        private actions: Actions,
        private router: Router,
        private coursesService: CourseService,
    ) {}

    @Effect()
    GetData: Observable<any> = this.actions.pipe(
        ofType(CourseActionsActionTypes.GET_DATA),
        map((action: GetData) => action.payload),
        switchMap(payload => {
            return this.coursesService.getDataById(payload)
                .pipe(
                    map((courses) => {
                        return new CourseDataSuccess({courses});
                    }),
                    catchError((err) => {
                        return of(new CourseDataFailure({error: err}));
                    }));
        }));

    @Effect()
    SaveData: Observable<any> = this.actions.pipe(
        ofType(CourseActionsActionTypes.SAVE_DATA),
        map((action: SaveData) => action.payload),
        switchMap(payload => {
          return this.coursesService.saveData(payload.value, payload.id)
              .pipe(
                  map((course) => {
                      return new SaveDataSuccess({course});
                  }),
                  catchError((err) => {
                      return of(new SaveDataFailure({error: err}));
                  }));
        }));

    @Effect({ dispatch: false })
    SaveDataSuccess: Observable<any> = this.actions.pipe(
        ofType(CourseActionsActionTypes.SAVE_DATA_SUCCESS),
        tap(() => {
            this.router.navigateByUrl('/');
        })
    );
}
