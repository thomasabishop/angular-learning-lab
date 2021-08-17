import {Component} from '@angular/core';
import {componentList} from './component-list';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.less'],
})
export class SplashComponent {
  public COMPONENT_LIST = componentList;
}
