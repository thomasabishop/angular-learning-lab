import {Component} from '@angular/core';
import IListTask from './list-item';

@Component({
  selector: 'app-method-one',
  templateUrl: './method-one.component.html',
  styleUrls: ['./method-one.component.less'],
})
export class MethodOneComponent {
  // Some starter values for the list
  public listTasks: IListTask[] = [
    {
      task: 'Book dentist appointment',
      date: 'Mon, 23 Aug 2021 12:32:08 GMT',
    },
    {
      task: 'Fix refrigerator',
      date: 'Mon, 23 Aug 2021 12:54:08 GMT',
    },
  ];

  // Add new task to the list array
  public onCreateTask(task: IListTask): void {
    this.listTasks.push(task);
    console.log(this.listTasks);
  }

  // Filter list array for object containing taskName, get index and remove it from array
  // The task name will be received by the function as an Event emitter of type string, defined in <list-item>.
  public onDeleteTask(taskName: string): void {
    const position = this.listTasks.map((item) => item.task).indexOf(taskName);
    this.listTasks.splice(position, 1);
  }
}
