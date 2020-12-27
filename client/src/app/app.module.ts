import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, BookingModule],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
