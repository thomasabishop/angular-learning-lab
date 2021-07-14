import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondRenderBlockComponent } from './cond-render-block.component';

describe('CondRenderBlockComponent', () => {
  let component: CondRenderBlockComponent;
  let fixture: ComponentFixture<CondRenderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondRenderBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondRenderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
