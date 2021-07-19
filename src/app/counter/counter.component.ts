import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less'],
})
export class CounterComponent implements OnInit {
  constructor() {}
  public counter = 0;
  public ngOnInit(): void {}

  public increase(): number {
    return this.counter++;
  }

  public decrease(): number | boolean {
    return this.counter > 0 && this.counter--;
  }

  public reset(): number {
    return (this.counter = 0);
  }
}
