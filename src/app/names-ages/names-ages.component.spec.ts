import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesAgesComponent } from './names-ages.component';

describe('NamesAgesComponent', () => {
  let component: NamesAgesComponent;
  let fixture: ComponentFixture<NamesAgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesAgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesAgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
