import { TestBed } from '@angular/core/testing';

import { CounterAlertService } from './counter-alert.service';

describe('CounterAlertService', () => {
  let service: CounterAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
