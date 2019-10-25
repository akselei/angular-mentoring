import {Component, Injectable, OnInit} from '@angular/core';
import { ICourse, Course } from './models/courses.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
    courseList: ICourse[];
    courseData = 'assets/fakeCourseData.json';

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
}

