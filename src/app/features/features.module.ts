import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '@core/directives/directives.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material';
import { CourseService } from '@features/services/course/course.service';
import { SearchService } from '@features/services/search/search.service';
import { RouterModule } from '@angular/router';
import { AddNewCourseModule } from '@features/add-new-course/add-new-course.module';
import { AuthModule } from '@features/auth/auth.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import * as fromComponents from '.';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [...fromComponents.components],
    exports: [...fromComponents.components],
    providers: [ CourseService, SearchService ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivesModule,
        PipesModule,
        MatDialogModule,
        RouterModule,
        AddNewCourseModule,
        AuthModule,
        MatProgressSpinnerModule,
        TranslateModule
    ],
    entryComponents: [
        DeleteDialogComponent
    ]
})
export class FeaturesModule { }
