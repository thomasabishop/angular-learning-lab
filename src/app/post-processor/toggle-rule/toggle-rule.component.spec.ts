import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleRuleComponent } from './toggle-rule.component';

describe('ToggleRuleComponent', () => {
  let component: ToggleRuleComponent;
  let fixture: ComponentFixture<ToggleRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
