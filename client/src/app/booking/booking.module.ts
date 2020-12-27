import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NgSelectModule } from '@ng-select/ng-select';

import { BookComponent } from './containers/book/book.component';
import { BookingComponent } from './containers/booking/booking.component';
import { DurationComponent } from './components/duration/duration.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HelpersComponent } from './components/helpers/helpers.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ContactComponent } from './components/contact/contact.component';
import { PickupComponent } from './components/pickup/pickup.component';
import { DropoffComponent } from './components/dropoff/dropoff.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    BookComponent,
    BookingComponent,
    DurationComponent,
    ScheduleComponent,
    HelpersComponent,
    QuoteComponent,
    ContactComponent,
    PickupComponent,
    DropoffComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DpDatePickerModule,
    NgSelectModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:4000/graphql',
            withCredentials: true,
          }),
          credentials: 'include',
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class BookingModule {}
