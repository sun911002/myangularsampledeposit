import { TestBed, inject } from '@angular/core/testing';

import { ResoveServiceService } from './resove-service.service';

describe('ResoveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResoveServiceService]
    });
  });

  it('should be created', inject([ResoveServiceService], (service: ResoveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
