import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from './auth-guard.service';

import { LoginComponent } from './auth/containers/login/login.component';
import { SignupComponent } from './auth/containers/signup/signup.component';
import { ProfileComponent } from './auth/containers/profile/profile.component';
import { BookComponent } from './booking/containers/book/book.component';
import { BookingComponent } from './booking/containers/booking/booking.component';
import { PaymentComponent } from './booking/containers/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'get-started', pathMatch: 'full' },
  { path: 'get-started', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'book', component: BookComponent, canActivate: [AuthGuard] },
  { path: 'booking', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
