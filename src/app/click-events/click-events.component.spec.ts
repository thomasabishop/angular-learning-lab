import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEventsComponent } from './click-events.component';

describe('ClickEventsComponent', () => {
  let component: ClickEventsComponent;
  let fixture: ComponentFixture<ClickEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
