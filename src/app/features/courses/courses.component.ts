import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CourseService } from '@features/services/course/course.service';
import { ICourse } from './models/courses.model';
import { Subscription } from 'rxjs';
import { SearchService } from '@features/services/search/search.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit, OnDestroy {
    courseList: ICourse[];
    getItemId: Subscription;
    getSearch: Subscription;
    searchResults = false;
    page = 1;

    dataIsAvailable = true;

    constructor(
        private courseService: CourseService,
        private changeDetection: ChangeDetectorRef,
        private searchService: SearchService
    ) { }

    ngOnInit() {
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
            this.courseService.getData(0).subscribe((data) => {
                this.courseList = data;
                this.changeDetection.markForCheck();
            });
        }
    }

    setCoursesList(): void {
        this.getItemId = this.courseService.getId().subscribe( key => {
            this.courseService.deleteItem(key.itemId);
            this.courseList = this.courseList.filter(item => item.id !== key.itemId);
            this.changeDetection.markForCheck();
        });
    }

    openDeleteDialog(id): void {
        this.courseService.deleteDialogItem(id);
    }

    loadMoreHandler(): void {
        this.page++;

        if (!this.searchResults) {
            this.courseService.getData(this.page * 3).subscribe(key => {
                this.courseList = this.courseList.concat(key);
                this.changeDetection.markForCheck();
            });
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
            this.changeDetection.markForCheck();
        });
    }

  addCourse(): void {
    this.courseService.createItem();
  }
}

