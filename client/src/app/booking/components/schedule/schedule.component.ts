import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  @Output() onUpdateBookingData: EventEmitter<any> = new EventEmitter();
  @Input() selectedDateInput: string;
  @Input() selectedTimeInput: string;

  selectedDate: moment.Moment = null;
  selectedTime: string = null;
  availableTimes: string[] = [];
  datePickerConfig = {
    min: moment(),
    showNearMonthDays: false,
  };

  constructor() {}

  ngOnInit(): void {
    if (this.selectedDateInput) {
      this.selectedDate = moment(this.selectedDateInput);
      this.selectedTime = this.selectedTimeInput;
      this.getListOfAvailableTime();
    }
  }

  getListOfAvailableTime() {
    if (this.selectedDate) {
      const today = moment();
      let startTime = moment(this.selectedDate).startOf('D').add('9', 'hours');
      let endTime = moment(this.selectedDate).startOf('D').add('18', 'hours');
      if (
        this.selectedDate.format('YYYY-MM-DD') == today.format('YYYY-MM-DD')
      ) {
        const remainder = 30 - (today.minute() % 30);
        startTime = today.add(1, 'hours').add(remainder, 'minutes');
      }

      const availableTimes = [];
      while (startTime <= endTime) {
        availableTimes.push(startTime.format('HH:mm'));
        //Add interval of 30 minutes
        startTime.add(30, 'minutes');
      }
      this.availableTimes = availableTimes;
    }
  }

  nextStep() {
    const today = moment().endOf('D');
    if (this.selectedDate.endOf('D').isSameOrAfter(today)) {
      this.onUpdateBookingData.emit({
        selectedDate: this.selectedDate.toISOString(),
        selectedTime: this.selectedTime,
      });
    }
  }
}
