import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountCharsService {
  public countCharacters(input: string): number {
    return input.length;
  }
}
