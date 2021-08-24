import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UdemyDirectivesComponent} from './udemy-directives.component';

describe('UdemyDirectivesComponent', () => {
  let component: UdemyDirectivesComponent;
  let fixture: ComponentFixture<UdemyDirectivesComponent>;
  let componentDom: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UdemyDirectivesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    componentDom = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onRecordClicks should call onToggleParagraphVisibility', () => {
    spyOn(component, 'onToggleParagraphVisibility');
    component.onRecordClicks();
    fixture.detectChanges();
    expect(component.onToggleParagraphVisibility).toHaveBeenCalled();
  });

  it('buttonClicks should increment after onRecordClicks is called', () => {
    expect(component.buttonClicks.length).toEqual(0);
    component.onRecordClicks();
    fixture.detectChanges();
    expect(component.buttonClicks.length).toBeGreaterThan(0);
  });

  it('table row should have blue background after minimum of 5 clicks', () => {
    for (let i = 0; i <= 5; i++) {
      component.onRecordClicks();
    }
    fixture.detectChanges();
    expect(componentDom.nativeElement.querySelector('.blue-background')).toBeTruthy();
  });
});
