import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.less'],
})
export class ChildToParentComponent implements OnInit {
  @Output() public newGroceryItemEvent = new EventEmitter();

  public addNewGroceryItem(value: string): void {
    this.newGroceryItemEvent.emit(value);
  }
  public ngOnInit(): void {}
}
