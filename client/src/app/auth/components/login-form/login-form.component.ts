import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { AuthResponse } from '../../types';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  loading: boolean = false;
  errors: any;

  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin() {
    this.loading = true;
    this.errors = null;
    this._authService.onLogin(this.email, this.password).subscribe(
      ({ data }: { data: AuthResponse }) => {
        this.loading = false;
        if (data.errors) {
          this.errors = data.errors;
        } else {
          this.router.navigate(['/book']);
        }
      },
      (error) => {
        this.loading = false;
        console.log('there was an error sending the query', error);
      }
    );
  }
}
