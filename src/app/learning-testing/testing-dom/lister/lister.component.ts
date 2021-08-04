import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.less'],
})
export class ListerComponent {
  @Input() public arrayElement: string;
}
