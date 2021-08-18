import {Component} from '@angular/core';

@Component({
  selector: 'app-udemy-create-component',
  templateUrl: './udemy-create-component.component.html',
  styleUrls: ['./udemy-create-component.component.less'],
})
export class UdemyCreateComponentComponent {
  public showSuccess = false;
  public showWarning = false;

  public onToggleSuccess(): void {
    this.showSuccess === true ? (this.showSuccess = false) : (this.showSuccess = true);
    this.showWarning = false;
  }

  public onToggleWarning(): void {
    this.showWarning === true ? (this.showWarning = false) : (this.showWarning = true);
    this.showSuccess = false;
  }
}
