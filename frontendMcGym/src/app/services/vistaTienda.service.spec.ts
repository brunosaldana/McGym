import { TestBed } from '@angular/core/testing';

import { MicarritoService } from './vistaTienda.service';

describe('MicarritoService', () => {
  let service: MicarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
