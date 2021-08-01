import {Component, Input} from '@angular/core';
//import {IInputLoop} from './input-loop.model';

interface IInputLoop {
  language: string;
  usagePercent: number;
}
@Component({
  selector: 'app-input-loop',
  templateUrl: './input-loop.component.html',
  styleUrls: ['./input-loop.component.less'],
})
export class InputLoopComponent {
  @Input() public programmingLanguageData!: IInputLoop;
}

// ng-container
