import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenResaultComponent } from './kitchen-resault.component';

describe('KitchenResaultComponent', () => {
  let component: KitchenResaultComponent;
  let fixture: ComponentFixture<KitchenResaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenResaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenResaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
