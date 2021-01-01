import { TestBed } from '@angular/core/testing';

import { DeletetaskService } from './deletetask.service';

describe('DeletetaskService', () => {
  let service: DeletetaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletetaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
