import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowticketsComponent } from './adminshowtickets.component';

describe('AdminshowticketsComponent', () => {
  let component: AdminshowticketsComponent;
  let fixture: ComponentFixture<AdminshowticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminshowticketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminshowticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
