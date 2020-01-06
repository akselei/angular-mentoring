import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '@features/services/course/course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, selectCourseActionsState } from '@core/store/app.states';
import {GetData, SaveData} from '@core/store/course-actions/actions/course-actions.actions';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewCourseComponent implements OnInit {
  courseList;
  courseForm: FormGroup;
  id: string = this.activatedRoute.snapshot.paramMap.get('id');
  duration: number;
  date: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      public fb: FormBuilder,
      private router: Router,
      private courseService: CourseService,
      private store: Store<AppState>,
      private changeDetection: ChangeDetectorRef
  ) {
    this.courseForm = this.fb.group({
      name: [''],
      description: ['']
    });
  }

  ngOnInit() {
    this.getExistingData();
  }

  getExistingData(): void {
    if (this.id) {
      this.store.dispatch(new GetData(this.id));
      this.store.select(selectCourseActionsState).subscribe(data => {
        if (data.course) {
          this.courseList = data.course;

          this.duration = this.courseList.length;
          this.date = this.courseList.date;

          this.courseForm = this.fb.group({
            name: [this.courseList.name, [Validators.required]],
            description: [this.courseList.description, [Validators.required]]
          });

        }
        this.changeDetection.markForCheck();
      });
    }
  }

  courseFormSubmit(): void {
      this.store.dispatch(new SaveData({value: this.courseForm.value, id: this.id}));
  }

  courseFormCancel(): void {
    this.router.navigate(['/']);
  }
}
