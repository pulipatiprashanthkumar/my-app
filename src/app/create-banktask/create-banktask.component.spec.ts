import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBanktaskComponent } from './create-banktask.component';

describe('CreateBanktaskComponent', () => {
  let component: CreateBanktaskComponent;
  let fixture: ComponentFixture<CreateBanktaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBanktaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBanktaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
