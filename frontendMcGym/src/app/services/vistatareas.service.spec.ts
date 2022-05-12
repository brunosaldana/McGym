import { TestBed } from '@angular/core/testing';

import { VistatareasService } from './vistatareas.service';

describe('VistatareasService', () => {
  let service: VistatareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistatareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
