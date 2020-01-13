import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '@features/services/course/course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, selectCourseActionsState } from '@core/store/app.states';
import { GetData, SaveData } from '@core/store/course-actions/actions/course-actions.actions';
import { DateValidatorDirective } from '@core/directives/date-validator/date-validator.directive';

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
  existingDate: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      public fb: FormBuilder,
      private router: Router,
      private courseService: CourseService,
      private store: Store<AppState>,
      private changeDetection: ChangeDetectorRef
  ) {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      length: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      date: ['', [Validators.required]]
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
          this.existingDate = this.courseList.date;

          this.courseForm = this.fb.group({
            name: [this.courseList.name],
            description: [this.courseList.description],
            length: [this.duration],
            date: [this.existingDate]
          });

        }
        this.changeDetection.markForCheck();
      });
    }
  }

  courseFormSubmit(): void {
    console.log(this.courseForm.value);
    // this.store.dispatch(new SaveData({value: this.courseForm.value, id: this.id}));
  }

  courseFormCancel(): void {
    this.router.navigate(['/']);
  }
}
