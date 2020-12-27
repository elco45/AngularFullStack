import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  loading: boolean = false;
  error: any;
  user: any = null;

  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this._authService
      .getCurrentUser()
      .valueChanges.subscribe(({ data }: { data: any }) => {
        if (data && data.me) {
          this.user = data.me;
        }
        this.loading = false;
      });
  }

  onLogout() {
    this._authService.onLogout().subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.loading = false;
        console.log('there was an error sending the query', error);
      }
    );
  }
}
