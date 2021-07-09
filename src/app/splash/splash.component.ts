import {Component, OnInit} from '@angular/core';
import {componentList} from './component-list';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.less'],
})
export class SplashComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  COMPONENT_LIST = componentList;
}
