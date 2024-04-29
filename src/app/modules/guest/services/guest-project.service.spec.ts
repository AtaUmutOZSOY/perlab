import { TestBed } from '@angular/core/testing';

import { GuestProjectService } from './guest-project.service';

describe('GuestProjectService', () => {
  let service: GuestProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
