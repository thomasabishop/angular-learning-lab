import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.less'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  // Error handling
  public throwError = false;

  // DOM outputs
  public intervalOutput: Date;
  public customIntervalOutput: Number;
  // Subscriptions
  public intervalSubscription: Subscription;
  public customIntervalSubscription: Subscription;

  public intervalObservable(): void {
    const source = interval(1000);
    this.intervalSubscription = source.subscribe(() => {
      this.intervalOutput = new Date();
    });
  }

  public customIntervalObservable(): void {
    let count = 0;
    const customIntervalObservable = new Observable((observer) => {
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          this.throwError = true;
          observer.error(new Error('Count is greater than 10'));
        } else {
          count++;
          this.customIntervalOutput = count;
        }
      }, 1000);
    });
    this.customIntervalSubscription = customIntervalObservable.subscribe();
  }

  public ngOnInit(): void {
    this.intervalObservable();
    this.customIntervalObservable();
  }

  public ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
    this.customIntervalSubscription.unsubscribe();
  }
}
