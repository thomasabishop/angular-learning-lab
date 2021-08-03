import {Component} from '@angular/core';
import {CountCharsService} from './count-chars.service';

@Component({
  selector: 'app-testing-a-service',
  templateUrl: './testing-a-service.component.html',
  styleUrls: ['./testing-a-service.component.less'],
})
export class TestingAServiceComponent {
  constructor(private countChars: CountCharsService) {}
  public characterCount = 0;
  public onCountCharacters(input: string): number {
    return (this.characterCount = this.countChars.countCharacters(input));
  }
}
