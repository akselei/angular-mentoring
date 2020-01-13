import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewCourseComponent } from '@features/add-new-course/components/add-new-course.component';
import { DateComponent } from '@features/add-new-course/components/date/date.component';
import { DurationComponent } from '@features/add-new-course/components/duration/duration.component';
import { SuggesterComponent } from '@features/add-new-course/components/suggester/suggester.component';
import { PipesModule } from '@core/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';

const routes: Routes = [
    { path: '', component: AddNewCourseComponent }
];

@NgModule({
    declarations: [
        AddNewCourseComponent,
        DateComponent,
        DurationComponent,
        SuggesterComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        PipesModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        AddNewCourseComponent,
        DateComponent,
        DurationComponent,
        SuggesterComponent,
        RouterModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule
    ],
    providers: [
        MatDatepickerModule
    ]
})
export class AddNewCourseModule { }
