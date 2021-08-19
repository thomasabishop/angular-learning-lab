import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UdemyDataBindingComponent} from './udemy-data-binding.component';

describe('UdemyDataBindingComponent', () => {
  let component: UdemyDataBindingComponent;
  let fixture: ComponentFixture<UdemyDataBindingComponent>;
  let componentDom: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UdemyDataBindingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    componentDom = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reset button should be disabled initially', () => {
    expect(componentDom.nativeElement.querySelector('button').disabled).toBeTruthy();
  });

  it('reset button should be disabled if not input', () => {
    component.username = '';
    fixture.detectChanges();
    expect(componentDom.nativeElement.querySelector('button').disabled).toBeTruthy();
  });

  it('reset button should be enabled if text entered', () => {
    component.username = 'thomas';
    fixture.detectChanges();
    expect(componentDom.nativeElement.querySelector('button').disabled).toBeFalsy();
  });

  it('text input updates the username variable', () => {
    component.username = 'thomas';
    fixture.detectChanges();
    expect(component.username).toBe('thomas');
  });
});
