import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningTestingComponent } from './learning-testing.component';

describe('LearningTestingComponent', () => {
  let component: LearningTestingComponent;
  let fixture: ComponentFixture<LearningTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
