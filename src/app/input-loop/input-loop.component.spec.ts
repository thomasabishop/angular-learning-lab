import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLoopComponent } from './input-loop.component';

describe('InputLoopComponent', () => {
  let component: InputLoopComponent;
  let fixture: ComponentFixture<InputLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
