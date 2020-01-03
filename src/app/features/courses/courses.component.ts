import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CourseService } from '@features/services/course/course.service';
import { Subscription } from 'rxjs';
import { SearchService } from '@features/services/search/search.service';
import {DeleteItem, ListRequest, LoadMoreRequest} from '@core/store/courses/actions/courses.actions';
import { Store } from '@ngrx/store';
import { AppState, selectCoursesState } from '@core/store/app.states';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit, OnDestroy {
    courseList;
    getItemId: Subscription;
    getSearch: Subscription;
    searchResults = false;
    page = 1;

    dataIsAvailable: boolean;

    constructor(
        private courseService: CourseService,
        private changeDetection: ChangeDetectorRef,
        private searchService: SearchService,
        private store: Store<AppState>
    ) { }

    ngOnInit() {
        this.store.dispatch(new ListRequest(0));

        this.setDefaultCoursesList();
        this.setCoursesList();
        this.setSearchList();
    }

    ngOnDestroy() {
        this.getItemId.unsubscribe();
        this.getSearch.unsubscribe();
    }

    setDefaultCoursesList(): void {
        if (this.page === 1) {
            this.store.select(selectCoursesState).subscribe(data => {
                this.dataIsAvailable = data.isDataAvailable;
                this.courseList = data.courses;
                this.changeDetection.markForCheck();
            });
        }
    }

    setCoursesList(): void {
        this.getItemId = this.courseService.getId().subscribe( key => {
            this.store.dispatch(new DeleteItem(key.itemId));
            this.changeDetection.markForCheck();
        });
    }

    openDeleteDialog(id): void {
        this.courseService.deleteDialogItem(id);
    }

    loadMoreHandler(): void {
        this.page++;

        if (!this.searchResults) {
            this.store.dispatch(new LoadMoreRequest(this.page * 3));
        }
    }

    setSearchList(): void {
        this.getSearch = this.searchService.getSearchedData()
            .pipe()
            .subscribe(res => {
            if (res.length) {
                this.courseList = res;
                this.searchResults = true;
            }

            this.dataIsAvailable = res.length;
            this.changeDetection.markForCheck();
        });
    }

  addCourse(): void {
    this.courseService.createItem();
  }
}

