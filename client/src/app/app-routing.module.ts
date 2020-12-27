import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';

import { LoginComponent } from './auth/containers/login/login.component';
import { SignupComponent } from './auth/containers/signup/signup.component';
import { ProfileComponent } from './auth/containers/profile/profile.component';
import { BookingComponent } from './booking/containers/booking/booking.component';

const routes: Routes = [
  { path: '', redirectTo: 'get-started', pathMatch: 'full'  },
  { path: 'get-started', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]  },
  { path: 'booking', component: BookingComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
