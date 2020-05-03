import { TestBed } from '@angular/core/testing';

import { RawgApiService } from './rawg-api.service';

describe('RawgApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RawgApiService = TestBed.get(RawgApiService);
    expect(service).toBeTruthy();
  });
});
