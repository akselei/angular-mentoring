import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesModule } from '@features/features.module';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';

@NgModule({
    declarations: [...fromComponents.components],
    imports: [
        CommonModule,
        FeaturesModule,
        RouterModule
    ],
    exports: [...fromComponents.components]
})
export class SharedModule { }
