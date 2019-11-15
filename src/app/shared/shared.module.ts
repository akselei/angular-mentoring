import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesModule } from '@features/features.module';

import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    FeaturesModule
  ],
  exports: [...fromComponents.components]
})
export class SharedModule { }
