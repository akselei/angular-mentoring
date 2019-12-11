import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '@features/services/course/course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss']
})
export class AddNewCourseComponent implements OnInit {
  courseList;
  courseForm: FormGroup;
  duration: number;
  date: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      public fb: FormBuilder,
      private router: Router,
      private courseService: CourseService
  ) {
    this.courseForm = this.fb.group({
      course_title: [''],
      course_description: ['']
    });
  }

  ngOnInit() {
    this.getExistingData();
  }

  getExistingData(): void {
    const id: any = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.courseService.getData(null).subscribe((data) => {
        this.courseList = data.filter(item => item.id === Number(id));

        this.duration = this.courseList[0].length;
        this.date = this.courseList[0].date;

        this.courseForm = this.fb.group({
          course_title: [this.courseList[0].name, [Validators.required]],
          course_description: [this.courseList[0].description, [Validators.required]]
        });
      });
    }
  }

  courseFormSubmit(): void {
    this.courseService.createItem();
  }

  courseFormCancel(): void {
    this.router.navigate(['/']);
  }
}
