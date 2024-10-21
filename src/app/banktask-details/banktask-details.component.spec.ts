import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanktaskDetailsComponent } from './banktask-details.component';

describe('BanktaskDetailsComponent', () => {
  let component: BanktaskDetailsComponent;
  let fixture: ComponentFixture<BanktaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanktaskDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanktaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
