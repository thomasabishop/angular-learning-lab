import {Component, Input, OnInit} from '@angular/core';

interface IFruits {
  fruit: string;
  weight: number;
}

@Component({
  selector: 'app-cond-render-block',
  templateUrl: './cond-render-block.component.html',
  styleUrls: ['./cond-render-block.component.less'],
})
export class CondRenderBlockComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input()
  dataToConditionallyRender!: IFruits;
}
