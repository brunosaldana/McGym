import { TestBed } from '@angular/core/testing';

import { EmplogService } from './emplog.service';

describe('EmplogService', () => {
  let service: EmplogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
