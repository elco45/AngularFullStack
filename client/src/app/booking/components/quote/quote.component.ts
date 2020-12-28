import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  @Output() onUpdateBookingData: EventEmitter<any> = new EventEmitter();
  @Input() bookingDataInput: any;
  bookingData: any = {};
  ratesPerMate: any = {
    1: 80,
    2: 120,
    3: 160,
  };
  rideAlong: boolean = false;
  justMates: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.bookingData = this.bookingDataInput;
    this.rideAlong = this.bookingDataInput.rideAlong;
    this.justMates = this.bookingDataInput.justMates;
  }

  nextStep() {
    this.onUpdateBookingData.emit({});
  }
}
