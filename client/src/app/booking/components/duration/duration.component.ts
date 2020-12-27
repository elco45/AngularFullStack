import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
})
export class DurationComponent implements OnInit {
  @Output() onUpdateBookingData: EventEmitter<any> = new EventEmitter();
  @Input() durationInput: number;
  duration: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.duration = this.durationInput;
  }

  nextStep() {
    if (this.duration > 0 && this.duration <= 8) {
      this.onUpdateBookingData.emit({ duration: this.duration });
    }
  }
}
