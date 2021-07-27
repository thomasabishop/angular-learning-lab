import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-click-events',
  templateUrl: './click-events.component.html',
  styleUrls: ['./click-events.component.less'],
})
export class ClickEventsComponent implements OnInit {
  public inputVariable = 'start value';
  public basicClickMessage = 'You clicked the button. Well done.';
  public printInput = `<input type="text" class="form-control" (input)="updateVariable($event.data)" />`;
  public updateVariable(str: string): void {
    this.inputVariable = str;
    console.log(str);
  }

  public basicClickEvent(): void {
    alert(this.basicClickMessage);
  }

  ngOnInit(): void {}
}
