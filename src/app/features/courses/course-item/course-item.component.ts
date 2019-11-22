import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})

export class CourseItemComponent implements OnInit {
  @Input() courseListItem;
  @Output() deleteCourse = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {

  }

  deleteCourseItem(): void {
    this.deleteCourse.emit(this.courseListItem);
  }
}
