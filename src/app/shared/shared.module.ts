import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesModule } from '@features/features.module';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [...fromComponents.components],
    imports: [
        CommonModule,
        FeaturesModule,
        RouterModule,
        TranslateModule
    ],
    exports: [...fromComponents.components]
})
export class SharedModule { }
