import { TestBed } from '@angular/core/testing';

import { GettaskbyidService } from './gettaskbyid.service';

describe('GettaskbyidService', () => {
  let service: GettaskbyidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettaskbyidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
