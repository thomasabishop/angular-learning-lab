import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-click-events',
  templateUrl: './click-events.component.html',
  styleUrls: ['./click-events.component.less'],
})
export class ClickEventsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  test = 'test';
  basicClickMessage = 'You clicked the button. Well done.';
  basicClickEvent(): void {
    alert(this.basicClickMessage);
  }
}
