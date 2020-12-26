import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingDateComponent } from './moving-date.component';

describe('MovingDateComponent', () => {
  let component: MovingDateComponent;
  let fixture: ComponentFixture<MovingDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
