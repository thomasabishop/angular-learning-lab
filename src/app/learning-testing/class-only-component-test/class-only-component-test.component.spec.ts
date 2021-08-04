import {TestBed} from '@angular/core/testing';
import {ClassOnlyComponentTestComponent} from './class-only-component-test.component';

describe('Component class-only tests', () => {
  let component: ClassOnlyComponentTestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassOnlyComponentTestComponent],
    });
    component = TestBed.inject(ClassOnlyComponentTestComponent);
  });

  it('should start with mood as happy', () => {
    expect(component.mood).toMatch('happy');
  });
  it('mood should change to sad on click', () => {
    component.toggleMood();
    expect(component.mood).toMatch('sad');
  });
});
