import {Component, Output, EventEmitter} from '@angular/core';
import IListTask from '../list-item';
@Component({
  selector: 'app-add-to-list-form',
  // tslint:disable-next-line: component-max-inline-declarations
  template: `
    <form>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Your task" #taskInput />
        <div class="input-group-append">
          <button
            class="delete-button btn btn-outline-primary"
            type="button"
            (click)="onAddNewTask(taskInput.value)"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  `,
})
export class AddToListFormComponent {
  @Output() public newTask = new EventEmitter<IListTask>();

  // Emit value inputted to form along with timestamp as event (packaged as object)
  // This is passed to parent `onCreateTask` method which adds the task to the Task list array

  public onAddNewTask(taskEvent: string): void {
    this.newTask.emit({
      task: taskEvent,
      date: new Date().toUTCString(),
    });
  }
}
