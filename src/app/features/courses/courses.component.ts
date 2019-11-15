import {Component, OnInit, OnDestroy} from '@angular/core';
import { CourseService } from '@core/services/course/course.service';
import { ICourse } from './models/courses.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit, OnDestroy {
    courseList: ICourse[];
    getItemId: Subscription;
    searchText: string;

    dataIsAvailable = true;

    constructor(private courseService: CourseService) { }

    ngOnInit() {
        this.courseService.getData().subscribe((data: ICourse[]) => {
            this.courseList = data;
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
        });
    }

    openDeleteDialog(id): void {
        this.courseService.deleteDialogItem(id);
    }

    editCourse(): void {
        this.courseService.editItem();
    }

    loadMoreHandler(): void {
        console.log('Load More Button Works!');
    }

    searchCourse(data: string): void {
        this.searchText = data;
    }
}

