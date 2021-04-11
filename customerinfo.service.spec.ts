import { TestBed } from '@angular/core/testing';

import { CustomerinfoService } from './customerinfo.service';

describe('CustomerinfoService', () => {
  let service: CustomerinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
