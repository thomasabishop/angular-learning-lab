import {Component, Input, Output, EventEmitter} from '@angular/core';
import IListTask from '../list-item';

@Component({
  selector: 'app-list-item',
  // tslint:disable-next-line: component-max-inline-declarations
  template: `
    <div class="mb-2 list-group-item  flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ listTask.task }}</h5>
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
  @Output() public deleteRequest = new EventEmitter();

  // tslint:disable-next-line: max-line-length
  // When individual list item button clicked, the task property of the specific listItem object will be emitted as an event, to be fed to the partent `onDeleteTask` method which removes it from the array of list items.

  public onRaiseDelete(task: string): void {
    this.deleteRequest.emit(task);
  }
}

// as whole?
