import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegatablesComponent } from './vegatables.component';

describe('VegatablesComponent', () => {
  let component: VegatablesComponent;
  let fixture: ComponentFixture<VegatablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VegatablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
