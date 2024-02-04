import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Booking3Component } from './booking3.component';

describe('Booking3Component', () => {
  let component: Booking3Component;
  let fixture: ComponentFixture<Booking3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Booking3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Booking3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
