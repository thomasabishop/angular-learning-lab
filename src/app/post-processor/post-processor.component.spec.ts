import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProcessorComponent } from './post-processor.component';

describe('PostProcessorComponent', () => {
  let component: PostProcessorComponent;
  let fixture: ComponentFixture<PostProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProcessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
