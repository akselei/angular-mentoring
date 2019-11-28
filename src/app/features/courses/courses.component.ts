import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CourseService } from '@features/services/course/course.service';
import { ICourse } from './models/courses.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit, OnDestroy {
    courseList: ICourse[];
    getItemId: Subscription;
    searchText: string;

    dataIsAvailable = true;

    constructor(
        private courseService: CourseService,
        private changeDetection: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.courseService.getData().subscribe((data) => {
            this.courseList = data;
            this.changeDetection.markForCheck();
        });
        this.setCoursesList();
    }

    ngOnDestroy() {
        this.getItemId.unsubscribe();
    }

    setCoursesList(): void {
        this.getItemId = this.courseService.getId().subscribe( key => {
            const index = this.courseList.findIndex(item => item.id === key.itemId);
            this.courseList.splice(index, 1);
            this.changeDetection.markForCheck();
        });
    }

    openDeleteDialog(id): void {
        this.courseService.deleteDialogItem(id);
    }

    loadMoreHandler(): void {
        console.log('Load More Button Works!');
    }

    searchCourse(data: string): void {
        this.searchText = data;
    }

  addCourse(): void {
    this.courseService.createItem();
  }
}

