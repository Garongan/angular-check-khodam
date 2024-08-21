import { TestBed } from '@angular/core/testing';

import { KhodamServiceService } from './khodam-service.service';

describe('KhodamServiceService', () => {
  let service: KhodamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhodamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
