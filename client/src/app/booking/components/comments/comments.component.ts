import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Output() onUpdateBookingData: EventEmitter<any> = new EventEmitter();
  @Input() commentsInput: string;
  comments: string = '';

  constructor() {}

  ngOnInit(): void {
    this.comments = this.commentsInput;
  }

  nextStep() {
    this.onUpdateBookingData.emit({
      comments: this.comments,
    });
  }
}
