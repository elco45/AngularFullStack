import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './containers/booking/booking.component';
import { DurationComponent } from './components/duration/duration.component';
import { MovingDateComponent } from './components/moving-date/moving-date.component';
import { MatesComponent } from './components/mates/mates.component';
import { SummaryComponent } from './components/summary/summary.component';



@NgModule({
  declarations: [BookingComponent, DurationComponent, MovingDateComponent, MatesComponent, SummaryComponent],
  imports: [
    CommonModule
  ]
})
export class BookingModule { }
