import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '@core/directives/directives.module';
import { PipesModule } from '@core/pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule
  ]
})
export class CoreModule { }
