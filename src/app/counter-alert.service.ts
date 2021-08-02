import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterAlertService {
  public issueAlert(counterValue: number | string): void {
    alert(`The counter value is ${counterValue}`);
  }
}
