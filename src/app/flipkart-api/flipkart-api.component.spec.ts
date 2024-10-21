import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartAPIComponent } from './flipkart-api.component';

describe('FlipkartAPIComponent', () => {
  let component: FlipkartAPIComponent;
  let fixture: ComponentFixture<FlipkartAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
