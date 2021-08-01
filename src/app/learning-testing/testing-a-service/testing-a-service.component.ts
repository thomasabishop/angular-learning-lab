import {Component} from '@angular/core';
import {CountCharsService} from './count-chars.service';

@Component({
  selector: 'app-testing-a-service',
  templateUrl: './testing-a-service.component.html',
  styleUrls: ['./testing-a-service.component.less'],
})
export class TestingAServiceComponent {
  constructor(private countChars: CountCharsService) {}

  public onCountCharacters(input: string): void {
    if (!input) {
      alert('Please enter some text.');
    } else {
      alert(`There are ${this.countChars.countCharacters(input)} characters in the text`);
    }
  }
}
