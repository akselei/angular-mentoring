import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewCourseComponent } from '@features/add-new-course/components/add-new-course.component';
import { DateComponent } from '@features/add-new-course/components/date/date.component';
import { DurationComponent } from '@features/add-new-course/components/duration/duration.component';
import { SuggesterComponent } from '@features/add-new-course/components/suggester/suggester.component';
import { PipesModule } from '@core/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AddNewCourseComponent,
        DateComponent,
        DurationComponent,
        SuggesterComponent
    ],
    imports: [
        CommonModule,
        PipesModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        AddNewCourseComponent,
        DateComponent,
        DurationComponent,
        SuggesterComponent
    ]
})
export class AddNewCourseModule { }
