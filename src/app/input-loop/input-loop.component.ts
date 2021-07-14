import {Component, Input, OnInit} from '@angular/core';
import {IInputLoop} from './input-loop.model';

@Component({
  selector: 'app-input-loop',
  templateUrl: './input-loop.component.html',
  styleUrls: ['./input-loop.component.less'],
})
export class InputLoopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  programmingLanguageData!: IInputLoop;
}

// ng-container
