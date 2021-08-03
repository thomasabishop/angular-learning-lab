import {TestBed} from '@angular/core/testing';
import {ClassOnlyDepsComponent} from './class-only-deps.component';
import {DateService} from './date.service';

describe('Component class with dep tests', () => {
  let comp;
  let dateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassOnlyDepsComponent, {provide: DateService}],
    });
    comp = TestBed.inject(ClassOnlyDepsComponent);
    dateService = TestBed.inject(DateService);
  });

  it('should return a string matching date format', () => {
    expect(comp.theDate).toMatch(/[A-Z].[a-z].\d{1,2},.\d{4}/);
  });

  it('should format a JS date using the injected date formatter service', () => {
    const aDate = new Date();
    const formatted = dateService.formatDate(aDate);
    expect(formatted).toMatch(/[A-Z].[a-z].\d{1,2},.\d{4}/);
    expect(dateService.formatDate(aDate)).toMatch(/[A-Z].[a-z].\d{1,2},.\d{4}/);
  });
});
