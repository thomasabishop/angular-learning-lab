import {ClassOnlyComponentTestComponent} from './class-only-component-test.component';

describe('Component class-only tests', () => {
  it('should start with mood as happy', () => {
    const comp = new ClassOnlyComponentTestComponent();
    expect(comp.mood).toMatch('happy');
  });
  it('mood should change to sad on click', () => {
    const comp = new ClassOnlyComponentTestComponent();
    comp.toggleMood();
    expect(comp.mood).toMatch('sad');
  });
});
