import { TestBed } from '@angular/core/testing';

import { MydaniFooterService } from './mydani-footer.service';

describe('MydaniFooterService', () => {
  let service: MydaniFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydaniFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
