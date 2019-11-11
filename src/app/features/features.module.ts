import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '@core/directives/directives.module';
import { PipesModule } from '@core/pipes/pipes.module';

import * as fromComponents from '.';

@NgModule({
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    PipesModule
  ]
})
export class FeaturesModule { }
