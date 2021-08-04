import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TestingDomComponent} from './testing-dom.component';

describe('TestingDomComponent', () => {
  let component: TestingDomComponent;
  let fixture: ComponentFixture<TestingDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingDomComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title text', () => {
    const cardElement: HTMLElement = fixture.nativeElement;
    const heading = cardElement.querySelector('.card-body h6');
    expect(heading?.textContent).toEqual('Parent-level output:');
  });

  it('the first value should be blank then `tiger` after `outputArray` method runs once', () => {
    const parentBlock: HTMLElement = fixture.nativeElement;
    const parentOutput = parentBlock.querySelector('p.parent-output');
    expect(parentOutput?.textContent).toEqual('');
    component.outputArray();
    fixture.detectChanges();
    expect(parentOutput?.textContent).toEqual('tiger');
  });
});
