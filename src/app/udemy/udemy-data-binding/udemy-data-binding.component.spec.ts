import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyDataBindingComponent } from './udemy-data-binding.component';

describe('UdemyDataBindingComponent', () => {
  let component: UdemyDataBindingComponent;
  let fixture: ComponentFixture<UdemyDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
