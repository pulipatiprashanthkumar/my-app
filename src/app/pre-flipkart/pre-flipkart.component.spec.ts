import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFlipkartComponent } from './pre-flipkart.component';

describe('PreFlipkartComponent', () => {
  let component: PreFlipkartComponent;
  let fixture: ComponentFixture<PreFlipkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreFlipkartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreFlipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
