import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomResaultComponent } from './room-resault.component';

describe('RoomResaultComponent', () => {
  let component: RoomResaultComponent;
  let fixture: ComponentFixture<RoomResaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomResaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomResaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
