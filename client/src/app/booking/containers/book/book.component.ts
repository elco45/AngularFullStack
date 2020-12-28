import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSelectMoveType(moveType) {
    let bookingData = JSON.parse(localStorage.getItem('bookingData')) || {};
    bookingData = { ...bookingData, type: moveType };
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    this.router.navigate(['booking']);
  }

  onLogout() {
    this._authService.onLogout().subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('there was an error sending the query', error);
      }
    );
  }
}
