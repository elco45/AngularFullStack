import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { AuthResponse } from '../../types';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  loading: boolean = false;
  errors: any;

  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSignup() {
    this.loading = true;
    this.errors = null;
    this._authService.onSignup(this.name, this.email, this.password).subscribe(
      ({ data }: { data: AuthResponse }) => {
        this.loading = false;
        if (data.errors) {
          this.errors = data.errors;
        } else {
          this.router.navigate(['/profile']);
        }
      },
      (error) => {
        this.loading = false;
        console.log('there was an error sending the query', error);
      }
    );
  }
}
