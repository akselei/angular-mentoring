import { Component, OnInit } from '@angular/core';
import { ICourse, Course } from '../models/courses.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})

export class CourseItemComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const item: ICourse = new Course(1, 'Test title', '22/55/7777', 'Lorem Ipsum', '90 min');
  }
}
