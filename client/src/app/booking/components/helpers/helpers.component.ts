import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss'],
})
export class HelpersComponent implements OnInit {
  @Output() onUpdateBookingData: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  nextStep(mates) {
    if (mates > 0 && mates <= 3) {
      this.onUpdateBookingData.emit({ numberOfHelpers: mates });
    }
  }
}
