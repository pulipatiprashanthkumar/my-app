import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flipkarttask4Component } from './flipkarttask4.component';

describe('Flipkarttask4Component', () => {
  let component: Flipkarttask4Component;
  let fixture: ComponentFixture<Flipkarttask4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flipkarttask4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flipkarttask4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
