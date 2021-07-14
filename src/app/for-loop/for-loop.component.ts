import {Component, OnInit} from '@angular/core';
import {programmingLangsPopularity} from './input-loop.data';
@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.less'],
})
export class ForLoopComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  progLangs = programmingLangsPopularity;
}
