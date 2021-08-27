import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MethodOneComponent} from './method-one.component';
import {ListItemComponent} from './list-item/list-item.component';
import {AddToListFormComponent} from './add-to-list-form/add-to-list-form.component';
import IListTask from './list-item';

describe('MethodOneComponent', () => {
  let component: MethodOneComponent;
  let fixture: ComponentFixture<MethodOneComponent>;
  let listTask: IListTask;
  let componentDom: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MethodOneComponent, ListItemComponent, AddToListFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodOneComponent);
    component = fixture.componentInstance;
    componentDom = fixture.debugElement;
    fixture.detectChanges();
    component.listTasks = [];
    listTask = {
      task: 'Walk the dog',
      date: 'Mon, 23 Aug 2021 12:32:08 GMT',
    };
  });

  fit('ensure task list array is empty before commencing tests', () => {
    expect(component.listTasks.length).toBe(0);
  });

  fit('should add and remove items from the tasklist', () => {
    component.onCreateTask(listTask);
    expect(component.listTasks.length).toBeGreaterThan(0);
    component.onDeleteTask(listTask.task);
    expect(component.listTasks.length).toBe(0);
  });

  fit('it should add a task item element to the DOM when new task added', () => {
    component.onCreateTask(listTask);
    fixture.detectChanges();
    expect(componentDom.nativeElement.querySelector('app-list-item')).toBeTruthy();
  });
});
