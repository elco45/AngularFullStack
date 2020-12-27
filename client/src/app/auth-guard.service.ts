import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    this.auth
      .getCurrentUser()
      .valueChanges.subscribe(({ data }: { data: any }) => {
        if (data && data.me) {
        } else {
          this.router.navigate(['/']);
        }
      });
    return true;
  }

  canDeactivate(): boolean {
    console.log('asd')
    this.auth
      .getCurrentUser()
      .valueChanges.subscribe(({ data }: { data: any }) => {
        if (data && data.me) {
          this.router.navigate(['/booking']);
        } else {
        }
      });
    return true;
  }
}
