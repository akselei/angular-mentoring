import { Component, OnInit } from '@angular/core';

export interface ICourse {
  id: number;
  title: string;
  data: string;
  duration?: string;
  description: string;
}

export class Course implements ICourse {
  public id: number;
  public title: string;
  public data: string;
  public duration?: string;
  public description: string;

  constructor(id: number, title: string, data: string, description: string, duration?: string) {
    this.id = id;
    this.title = title;
    this.data = data;
    this.description = description;
    this.duration = duration;
  }
}

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
