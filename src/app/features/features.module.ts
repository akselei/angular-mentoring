import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import * as fromComponents from '.';

@NgModule({
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FeaturesModule { }
