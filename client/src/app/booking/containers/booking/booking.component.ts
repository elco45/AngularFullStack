import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

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
  justMates?: boolean;
  type?: string;

  selectedDate?: string;
  selectedTime?: string;
  comments?: string;
  dropoffAddress?: string;
  dropoffAddressDetails?: string;
  dropoffFloor?: number;
  dropoffHasElevator?: boolean;
}

const TYPES = {
  MOVE_TYPE: [
    'duration',
    'schedule',
    'helpers',
    'pickup',
    'dropoff',
    'comments',
    'quote',
  ],
  DELIVERY_TYPE: [
    'comments',
    'schedule',
    'helpers',
    'pickup',
    'dropoff',
    'quote',
  ],
  SHOP_TYPE: ['comments', 'pickup', 'dropoff', 'quote'],
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

  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const type = (this.bookingData && this.bookingData.type) || 'MOVE';
    this.currentType = TYPES[`${type}_TYPE`];
    delete this.bookingData.selectedDate;
    delete this.bookingData.selectedTime;
    delete this.bookingData.dropoffAddress;
    delete this.bookingData.dropoffAddressDetails;
    delete this.bookingData.dropoffFloor;
    delete this.bookingData.dropoffHasElevator;
    delete this.bookingData.comments;
  }

  getCurrentStep(): string {
    if (this.currentType) {
      if (this.step < this.currentType.length) {
        return this.currentType[this.step];
      } else {
        // finished go to guidelines/payments
        this.router.navigate(['payment']);
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
    localStorage.setItem('bookingData', JSON.stringify(this.bookingData));
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
