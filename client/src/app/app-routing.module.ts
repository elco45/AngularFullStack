import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/containers/login/login.component';
import { SignupComponent } from './auth/containers/signup/signup.component';
import { BookingComponent } from './booking/containers/booking/booking.component';

const routes: Routes = [
  { path: '', redirectTo: 'get-started', pathMatch: 'full'  },
  { path: 'get-started', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'booking', component: BookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
