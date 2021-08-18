import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UdemyCreateComponentComponent} from './udemy-create-component.component';
import {WarningComponent} from './warning-alert/warning.component';
import {SuccessComponent} from './success-alert/success.component';

describe('UdemyCreateComponentComponent', () => {
  let component: UdemyCreateComponentComponent;
  let fixture: ComponentFixture<UdemyCreateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UdemyCreateComponentComponent, WarningComponent, SuccessComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Class-only logic tests:
  it('should show neither alert at start', () => {
    expect(component.showSuccess).toBe(false);
    expect(component.showWarning).toBe(false);
  });

  it('should show the warning alert when clicked and success alert should not be visible', () => {
    component.onToggleWarning();
    fixture.detectChanges();
    expect(component.showWarning).toBe(true);
    expect(component.showSuccess).toBe(false);
  });

  it('should show the success alert when clicked and warning alert should not be visible', () => {
    component.onToggleSuccess();
    fixture.detectChanges();
    expect(component.showSuccess).toBe(true);
    expect(component.showWarning).toBe(false);
  });
  // DOM tests

  it('when either button clicked, an alert should be inserted into the DOM', () => {
    const card: HTMLElement = fixture.nativeElement;
    const cardBody = card.querySelector('.card-body');
    component.onToggleSuccess();
    fixture.detectChanges();
    expect(cardBody?.querySelector('div.alert')).toBeTruthy();
  });

  it('when success button clicked, warning alert should not be in DOM', () => {
    const card: HTMLElement = fixture.nativeElement;
    const cardBody = card.querySelector('.card-body');
    component.onToggleSuccess();
    fixture.detectChanges();
    expect(cardBody?.querySelector('div.alert-warning')).toBeFalsy();
  });
});
