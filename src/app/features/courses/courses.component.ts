import { Component, OnInit } from '@angular/core';
import { ICourse } from './models/courses.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
    courseList: ICourse[];
    searchText: string;
    courseData = 'assets/fakeCourseData.json';

    dataIsAvailable = true;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getJSON().subscribe(data => {
            this.courseList = data;
        });
    }

    deleteCourseById(id): void {
        console.log('course id ' + id);
    }

    loadMoreHandler(): void {
        console.log('Load More Button Works!');
    }

    public getJSON(): Observable<any> {
        return this.http.get(this.courseData);
    }

    public searchCourse(data: string): void {
        this.searchText = data;
    }
}

