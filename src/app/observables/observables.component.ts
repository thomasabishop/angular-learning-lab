import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.less'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  public basicEmitVal: Date;
  public intervalSubscriber: Subscription;
  public dateInterval: Date;
  public basicObservable(): void {
    let currentTimeSubject: Observable<Date>;
    const date = new Date();
    currentTimeSubject = new Observable((observer) => {
      observer.next(date);
    });

    currentTimeSubject.subscribe({
      next(x: Date): Date {
        return x;
      },
    });
    currentTimeSubject.subscribe((data) => (this.basicEmitVal = data));
  }

  public intervalObservable(): void {
    const source = interval(1000);
    this.intervalSubscriber = source.subscribe(() => {
      this.dateInterval = new Date();
    });
  }

  public ngOnInit(): void {
    this.basicObservable();
    this.intervalObservable();

    // The `observer` parameter in the callback in the constructor is where we say what the subscriber wants to subscribe to. The thing/ event it is going to describe.
    // const customInterval = new Observable((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    // });
  }

  public ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }
}
