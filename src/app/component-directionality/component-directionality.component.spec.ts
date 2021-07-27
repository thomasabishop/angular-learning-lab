import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDirectionalityComponent } from './component-directionality.component';

describe('ComponentDirectionalityComponent', () => {
  let component: ComponentDirectionalityComponent;
  let fixture: ComponentFixture<ComponentDirectionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentDirectionalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDirectionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
