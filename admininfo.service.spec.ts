import { TestBed } from '@angular/core/testing';

import { AdmininfoService } from './admininfo.service';

describe('AdmininfoService', () => {
  let service: AdmininfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmininfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
