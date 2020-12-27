import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelectMoveType(moveType) {
    let bookingData = JSON.parse(localStorage.getItem('bookingData')) || {};
    bookingData = { ...bookingData, type: moveType };
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    this.router.navigate(['booking']);
  }
}
