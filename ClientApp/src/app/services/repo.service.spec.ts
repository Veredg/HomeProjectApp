import { TestBed } from '@angular/core/testing';

import { ReposerviceService } from './repo.service';

describe('ReposerviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReposerviceService = TestBed.get(ReposerviceService);
    expect(service).toBeTruthy();
  });
});
