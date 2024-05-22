import { TestBed } from '@angular/core/testing';

import { ApiMasterService } from './api-master.service';

describe('ApiMasterService', () => {
  let service: ApiMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
