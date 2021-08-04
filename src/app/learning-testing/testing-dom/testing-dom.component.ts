import {Component} from '@angular/core';

@Component({
  selector: 'app-testing-dom',
  templateUrl: './testing-dom.component.html',
  styleUrls: ['./testing-dom.component.less'],
})
export class TestingDomComponent {
  public dataToGenerate = ['cat', 'dog', 'seal', 'lion', 'tiger'];
  public currentDatum: string | undefined;
  public outputArray(): void {
    this.dataToGenerate.length !== 0
      ? (this.currentDatum = this.dataToGenerate.pop())
      : (this.currentDatum = 'Array is empty!');
  }
}
