import { TestBed } from '@angular/core/testing';

import { UpdatetaskService } from './updatetask.service';

describe('UpdatetaskService', () => {
  let service: UpdatetaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatetaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
