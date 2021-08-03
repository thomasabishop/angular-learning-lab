import {Component} from '@angular/core';

@Component({
  selector: 'app-class-only-component-test',
  templateUrl: './class-only-component-test.component.html',
  styleUrls: ['./class-only-component-test.component.less'],
})
export class ClassOnlyComponentTestComponent {
  public mood = 'happy';
  public toggleMood(): string {
    return this.mood === 'happy' ? (this.mood = 'sad') : (this.mood = 'happy');
  }
}
