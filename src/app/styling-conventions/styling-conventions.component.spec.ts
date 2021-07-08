import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingConventionsComponent } from './styling-conventions.component';

describe('StylingConventionsComponent', () => {
  let component: StylingConventionsComponent;
  let fixture: ComponentFixture<StylingConventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylingConventionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingConventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
