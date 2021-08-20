import {Component} from '@angular/core';

@Component({
  selector: 'app-udemy-directives',
  templateUrl: './udemy-directives.component.html',
  styleUrls: ['./udemy-directives.component.less'],
})
export class UdemyDirectivesComponent {
  public paragraphIsVisible = true;
  public buttonClicks: string[] = [];

  public onToggleParagraphVisibility(): void {
    this.paragraphIsVisible === true
      ? (this.paragraphIsVisible = false)
      : (this.paragraphIsVisible = true);
  }

  public onRecordClicks(): void {
    this.onToggleParagraphVisibility();
    const d = new Date();
    this.buttonClicks.push(d.toUTCString());
  }

  public conditionalStyling(): any {
    if (this.buttonClicks.length >= 5) {
      return {
        backgroundColor: 'dodgerblue',
        color: 'white',
      };
    }
  }
}
