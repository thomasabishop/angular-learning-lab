import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiInteractionComponent } from './api-interaction.component';

describe('ApiInteractionComponent', () => {
  let component: ApiInteractionComponent;
  let fixture: ComponentFixture<ApiInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
