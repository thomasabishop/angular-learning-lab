import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterConsoleService {
  public issueConsole(counterValue: number): void {
    console.log(`The counter value is ${counterValue}`);
  }
}
