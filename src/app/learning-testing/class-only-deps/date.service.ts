import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  public formatDate(d: Date): string {
    return d.toLocaleDateString('en-US', {
      month: 'short',
      weekday: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }
}
