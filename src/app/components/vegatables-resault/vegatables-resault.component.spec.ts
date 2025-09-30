import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegatablesResaultComponent } from './vegatables-resault.component';

describe('VegatablesResaultComponent', () => {
  let component: VegatablesResaultComponent;
  let fixture: ComponentFixture<VegatablesResaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VegatablesResaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegatablesResaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
