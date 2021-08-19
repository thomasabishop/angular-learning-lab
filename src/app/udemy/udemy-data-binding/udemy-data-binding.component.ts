import {Component} from '@angular/core';
@Component({
  selector: 'app-udemy-data-binding',
  templateUrl: './udemy-data-binding.component.html',
  styleUrls: ['./udemy-data-binding.component.less'],
})
export class UdemyDataBindingComponent {
  public username = '';
  public usernameIsEmpty(): boolean {
    return this.username.length === 0;
  }
  public onResetInput(): string {
    return (this.username = '');
  }
}
