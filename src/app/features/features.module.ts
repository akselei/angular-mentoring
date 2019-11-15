import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DirectivesModule } from '@core/directives/directives.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './dialogs/edit-dialog/edit-dialog.component';
import { MatDialogModule } from '@angular/material';

import * as fromComponents from '.';

@NgModule({
    declarations: [...fromComponents.components, ],
    exports: [...fromComponents.components],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivesModule,
        PipesModule,
        MatDialogModule
    ],
    entryComponents: [
        DeleteDialogComponent,
        EditDialogComponent
    ]
})
export class FeaturesModule { }
