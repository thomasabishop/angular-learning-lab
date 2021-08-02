import {TestBed} from '@angular/core/testing';

import {CountCharsService} from './count-chars.service';

describe('CountCharsService', () => {
  let service: CountCharsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountCharsService],
    });
    service = TestBed.inject(CountCharsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the char length of a string 1', () => {
    expect(service.countCharacters('abc')).toBe(3);
    expect(service.countCharacters('abcd')).toBe(4);
  });

  it('should return the char length of a string 2', () => {
    expect(service.countCharacters('hello')).toBeGreaterThan(1);
  });
});
