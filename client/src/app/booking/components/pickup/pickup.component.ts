import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.scss'],
})
export class PickupComponent implements OnInit {
  @Output() onUpdateBookingData: EventEmitter<any> = new EventEmitter();
  @Input() pickupAddressInput: string;
  @Input() pickupFloorInput: number;
  @Input() pickupAddressDetailsInput: string;
  @Input() pickupHasElevatorInput: boolean;
  pickupAddress: string = '';
  pickupAddressDetails: string = '';
  pickupHasElevator: boolean = false;
  pickupFloor: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.pickupAddress = this.pickupAddressInput;
    this.pickupFloor = this.pickupFloorInput || 1;
    this.pickupAddressDetails = this.pickupAddressDetailsInput;
    this.pickupHasElevator = this.pickupHasElevatorInput;
  }

  nextStep() {
    this.onUpdateBookingData.emit({
      pickupAddress: this.pickupAddress,
      pickupAddressDetails: this.pickupAddressDetails,
      pickupHasElevator: this.pickupHasElevator,
      pickupFloor: this.pickupFloor,
    });
  }
}
