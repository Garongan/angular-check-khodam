import { TestBed } from '@angular/core/testing';

import { KhodamService } from './khodam.service';

describe('KhodamServiceService', () => {
  let service: KhodamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhodamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
