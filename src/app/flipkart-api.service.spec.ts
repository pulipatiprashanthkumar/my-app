import { TestBed } from '@angular/core/testing';

import { FlipkartAPIService } from './flipkart-api.service';

describe('FlipkartAPIService', () => {
  let service: FlipkartAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
