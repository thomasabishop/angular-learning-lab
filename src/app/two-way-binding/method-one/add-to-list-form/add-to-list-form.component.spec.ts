import {ComponentFixture, TestBed} from '@angular/core/testing';
import IListTask from '../list-item';
import {AddToListFormComponent} from './add-to-list-form.component';

describe('AddToListFormComponent', () => {
  let component: AddToListFormComponent;
  let fixture: ComponentFixture<AddToListFormComponent>;
  let listTask: IListTask;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddToListFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    listTask = {
      task: 'Get ingredients for pasta',
      date: new Date().toUTCString(),
    };
  });
  fit('New task form submit triggers event emission', () => {
    spyOn(component.newTask, 'emit').withArgs(listTask);
    component.onAddNewTask(listTask.task);
    fixture.detectChanges();
    // Check event is emitted
    expect(component.newTask.emit).toHaveBeenCalled();

    // Check event emitted with the right data
    expect(component.newTask.emit).toHaveBeenCalledWith({
      task: 'Get ingredients for pasta',
      date: new Date().toUTCString(),
    });
  });
});
