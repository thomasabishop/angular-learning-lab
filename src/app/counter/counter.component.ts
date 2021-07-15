import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  counter = 0;

  increase() {
    return this.counter++;
  }

  decrease() {
    this.counter > 0 && this.counter--;
  }

  reset() {
    this.counter = 0;
  }
}
