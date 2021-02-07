import { TestBed } from '@angular/core/testing';

import { ProcessServiceService } from './process-service';

describe('ProcessServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessServiceService = TestBed.get(ProcessServiceService);
    expect(service).toBeTruthy();
  });
});
