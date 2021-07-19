import { TestBed } from '@angular/core/testing';

import { CounterConsoleService } from './counter-console.service';

describe('CounterConsoleService', () => {
  let service: CounterConsoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterConsoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
