import {Component, OnInit, Input} from '@angular/core';
import {footballerInfo} from './names-ages.data';
import {IFootballerInfo} from './names-ages.model';
@Component({
  selector: 'app-names-ages',
  templateUrl: './names-ages.component.html',
  styleUrls: ['./names-ages.component.less'],
})
export class NamesAgesComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  footballers = footballerInfo;

  @Input()
  passedData: IFootballerInfo | undefined;
}
