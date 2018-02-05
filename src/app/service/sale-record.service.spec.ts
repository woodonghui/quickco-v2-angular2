import { TestBed, inject } from '@angular/core/testing';

import { SaleRecordService } from './sale-record.service';

describe('SaleRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaleRecordService]
    });
  });

  it('should be created', inject([SaleRecordService], (service: SaleRecordService) => {
    expect(service).toBeTruthy();
  }));
});
