import { Component, OnInit } from '@angular/core';

interface BookingData {
  duration?: number;
  email?: string;
  firstMoverRate?: number;
  numberOfHelpers?: number;
  pickupAddress?: string;
  pickupAddressDetails?: string;
  pickupFloor?: number;
  pickupHasElevator?: boolean;
  price?: number;
  priceTaxed?: number;
  rideAlong?: boolean;
  type?: string;

  selectedDate?: string;
  selectedTime?: string;
}

const TYPES = {
  MOVE_TYPE: [
    'duration',
    'schedule',
    'helpers',
    // 'contact',
    'pickup',
    'dropoff',
    'comments',
    'quote',
  ],
  DELIVERY_TYPE: [
    'comments',
    'schedule',
    'helpers',
    // 'contact',
    'pickup',
    'dropoff',
    'quote',
  ],
  SHOP_TYPE: [
    'comments',
    // 'contact',
    'pickup',
    'dropoff',
    'quote',
  ],
};

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  step: number = 0;
  latestStepCompleted: number = 0;
  currentStep: string = '';
  currentType: string[] = [];
  bookingData: BookingData =
    JSON.parse(localStorage.getItem('bookingData')) || {};

  constructor() {}

  ngOnInit(): void {
    console.log(this.bookingData);
    const type = (this.bookingData && this.bookingData.type) || 'MOVE';
    this.currentType = TYPES[`${type}_TYPE`];
  }

  getCurrentStep(): string {
    if (this.currentType) {
      if (this.step < this.currentType.length) {
        return this.currentType[this.step];
      } else {
        // finished go to guidelines
      }
    }
    return null;
  }

  setCurrentStep(step) {
    if (step <= this.latestStepCompleted) {
      this.step = step;
    }
  }

  nextStep(newData) {
    this.step++;
    if (this.step > this.latestStepCompleted) {
      this.latestStepCompleted = this.step;
    }
    this.bookingData = { ...this.bookingData, ...newData };
    console.log(this.bookingData);
    localStorage.setItem('bookingData', JSON.stringify(this.bookingData));
  }
}
