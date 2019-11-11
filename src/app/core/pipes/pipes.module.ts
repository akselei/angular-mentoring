import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeFormatPipe } from '@core/pipes/time-format/time-format.pipe';
import { OrderByPipe } from '@core/pipes/order-by/order-by.pipe';
import { SearchByPipe } from '@core/pipes/search-by/search-by.pipe';

@NgModule({
  declarations: [ TimeFormatPipe, OrderByPipe, SearchByPipe],
  imports: [ CommonModule ],
  exports: [ TimeFormatPipe, OrderByPipe, SearchByPipe ]
})
export class PipesModule { }
