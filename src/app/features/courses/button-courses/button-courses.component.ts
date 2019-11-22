import { Component, OnInit } from '@angular/core';
import { CourseService } from '@features/services/course/course.service';

@Component({
  selector: 'app-button-courses',
  templateUrl: './button-courses.component.html',
  styleUrls: ['./button-courses.component.scss']
})
export class ButtonCoursesComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  addCourse(): void {
    this.courseService.createItem();
  }

}
