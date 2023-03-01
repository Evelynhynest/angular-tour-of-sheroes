import { TestBed } from '@angular/core/testing';

import { SheroService } from './shero.service';

describe('HeroService', () => {
  let service: SheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
