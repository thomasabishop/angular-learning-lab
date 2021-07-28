import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-click-events',
  templateUrl: './click-events.component.html',
  styleUrls: ['./click-events.component.less'],
})
export class ClickEventsComponent implements OnInit {
  public inputVariable = 'This text will change as you type!';
  public twoWayBindingVariable = 'test';
  public basicClickMessage = 'You clicked the button. Well done.';
  public printInput = `<input type="text" class="form-control" (input)="updateVariable($event)" />`;

  public printComponent = `
    public inputVariable = 'This will change';
    public updateVariable(event: Event): void {
      this.inputVariable = (<HTMLInputElement>event.target).value;
  }
  `;
  public updateVariable(event: Event): void {
    this.inputVariable = (<HTMLInputElement>event.target).value;
  }

  public basicClickEvent(): void {
    alert(this.basicClickMessage);
  }

  ngOnInit(): void {}
}
