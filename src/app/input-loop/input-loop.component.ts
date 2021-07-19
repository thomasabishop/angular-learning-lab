import {Component, Input, OnInit} from '@angular/core';
import {IInputLoop} from './input-loop.model';

@Component({
  selector: 'app-input-loop',
  templateUrl: './input-loop.component.html',
  styleUrls: ['./input-loop.component.less'],
})
export class InputLoopComponent implements OnInit {
  @Input() public programmingLanguageData!: IInputLoop;

  public ngOnInit(): void {}
}

// ng-container
