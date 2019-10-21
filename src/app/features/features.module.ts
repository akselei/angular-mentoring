import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from '.';

@NgModule({
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
