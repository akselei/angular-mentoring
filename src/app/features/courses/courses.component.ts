import {Component, OnInit} from '@angular/core';
import { ICourse, Course } from './models/courses.model';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
    courseList: ICourse[] = [{
        id: 1,
        title: 'Video Course 1. Name tag',
        data: '9 Nov, 2018',
        duration: '1h 28 min',
        description: 'Learn about where you can find course descriptions, what information they include, how they work,\n' +
            '      and details about various components of a course description.\n' +
            '      Course descriptions report information about a university or college\'s classes.\n' +
            '      They\'re published both in course catalogs that outline degree requirements and in course\n' +
            '      schedules that contain descriptions for all courses offered during a particular semester.'
        },
        {
            id: 2,
            title: 'Video Course 2. Name tag',
            data: '9 Nov, 2018',
            duration: '1h 28 min',
            description: 'Learn about where you can find course descriptions, what information they include, how they work,\n' +
                '      and details about various components of a course description.\n' +
                '      Course descriptions report information about a university or college\'s classes.\n' +
                '      They\'re published both in course catalogs that outline degree requirements and in course\n' +
                '      schedules that contain descriptions for all courses offered during a particular semester.'
        },
        {
            id: 3,
            title: 'Video Course 3. Name tag',
            data: '9 Nov, 2018',
            duration: '1h 28 min',
            description: 'Learn about where you can find course descriptions, what information they include, how they work,\n' +
                '      and details about various components of a course description.\n' +
                '      Course descriptions report information about a university or college\'s classes.\n' +
                '      They\'re published both in course catalogs that outline degree requirements and in course\n' +
                '      schedules that contain descriptions for all courses offered during a particular semester.'
        },
    ];


    constructor() { }

    ngOnInit() {
    }

    deleteCourseById(id): void {
        console.log('course id ' + id);
    }

    onLoadMorehandler(): void {
        console.log('Load More Button Works!');
    }
}

