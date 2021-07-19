import {Component, OnInit} from '@angular/core';
import {CounterAlertService} from '../counter-alert.service';
import {CounterConsoleService} from './counter-console.service';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less'],
  providers: [CounterConsoleService],
})
export class CounterComponent implements OnInit {
  constructor(
    public makeCounterAlert: CounterAlertService,
    public makeConsoleAlert: CounterConsoleService,
  ) {}

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

  public counterAlert(): void {
    this.makeCounterAlert.issueAlert(this.counter);
  }

  public counterConsole(): void {
    this.makeConsoleAlert.issueConsole(this.counter);
  }
}
