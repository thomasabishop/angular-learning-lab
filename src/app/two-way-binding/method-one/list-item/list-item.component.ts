import {Component, Input, Output, EventEmitter} from '@angular/core';
import IListTask from '../list-item';

@Component({
  selector: 'app-list-item',
  // tslint:disable-next-line: component-max-inline-declarations
  template: `
    <div class="mb-2 list-group-item  flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 task">{{ listTask.task }}</h5>
        <button class="btn btn-outline-danger btn-sm" (click)="onRaiseDelete(listTask.task)">
          Delete
        </button>
      </div>
      <small>{{ listTask.date }}</small>
    </div>
  `,
})
export class ListItemComponent {
  @Input() public listTask: IListTask;
  @Output() public deleteRequest = new EventEmitter<string>();

  /**
   * When list item delete button clicked, the task property of the specific listItem object will be emitted as an event, to be fed to the parent `onDeleteTask` method which removes it from the array of list items.
   * @param task string corresponding to the task name
   */
  public onRaiseDelete(task: string): void {
    this.deleteRequest.emit(task);
  }
}

/**
 * For some reason this proved really hard to test.
 * The event emitter couldn't be tested unlike the other child component.
 * Use the other child to remember how to test emitters.
 */
