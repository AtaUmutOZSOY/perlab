import { TestBed } from '@angular/core/testing';

import { AdminTeamServiceService } from './admin-team-service.service';

describe('AdminTeamServiceService', () => {
  let service: AdminTeamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTeamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
