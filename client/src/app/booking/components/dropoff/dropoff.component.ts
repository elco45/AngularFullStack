import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dropoff',
  templateUrl: './dropoff.component.html',
  styleUrls: ['./dropoff.component.scss'],
})
export class DropoffComponent implements OnInit {
  @Output() onUpdateBookingData: EventEmitter<any> = new EventEmitter();
  @Input() dropoffAddressInput: string;
  @Input() dropoffFloorInput: number;
  @Input() dropoffAddressDetailsInput: string;
  @Input() dropoffHasElevatorInput: boolean;
  dropoffAddress: string = '';
  dropoffAddressDetails: string = '';
  dropoffHasElevator: boolean = false;
  dropoffFloor: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.dropoffAddress = this.dropoffAddressInput;
    this.dropoffFloor = this.dropoffFloorInput || 1;
    this.dropoffAddressDetails = this.dropoffAddressDetailsInput;
    this.dropoffHasElevator = this.dropoffHasElevatorInput;
  }

  nextStep() {
    this.onUpdateBookingData.emit({
      dropoffAddress: this.dropoffAddress,
      dropoffAddressDetails: this.dropoffAddressDetails,
      dropoffHasElevator: this.dropoffHasElevator,
      dropoffFloor: this.dropoffFloor,
    });
  }
}
