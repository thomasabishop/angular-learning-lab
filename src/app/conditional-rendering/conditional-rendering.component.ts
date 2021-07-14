import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-conditional-rendering',
  templateUrl: './conditional-rendering.component.html',
  styleUrls: ['./conditional-rendering.component.less'],
})
export class ConditionalRenderingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  languages = ['json', 'javascript', 'typescript', 'html'];
  codeOne = `
  fruits = [
    undefined,
    {
      fruit: 'banana',
      weight: 34,
    },
    null,
    {
      fruit: 'orange',
      weight: 40,
    },
    {
      fruit: 'strawberry',
      weight: 12,
    },
    {
      fruit: 'melon',
      weight: 120,
    },
  ];
  `;
  codeTwo = `<!--cond-rend-block.component.html-->
  <ul *ngIf="dataToConditionallyRender">
   <li>{{ dataToConditionallyRender.fruit }}:</li>
    <ul>
     <li>{{ dataToConditionallyRender.weight }}g</li>
    </ul>
  </ul>`;
  codeThree = `<!--conditional-rendering.component.html-->
  <app-cond-render-block *ngFor="let fruit of fruits" [dataToConditionallyRender]="fruit"> </app-cond-render-block>`;

  codeFour = `<!--cond-rend-block.component.html-->
  <ul *ngIf="dataToConditionallyRender && dataToConditionallyRender.weight">
   <li>{{ dataToConditionallyRender.fruit }}:</li>
    <ul>
     <li>{{ dataToConditionallyRender.weight }}g</li>
    </ul>
  </ul>
    `;
  fruits = [
    undefined,
    {
      fruit: 'banana',
      weight: 34,
    },
    null,
    // {
    //   time: 15,
    //   day: true,
    // },
    {
      fruit: 'orange',
      weight: 40,
    },
    {
      fruit: 'strawberry',
      weight: 12,
    },
    {
      fruit: 'melon',
      weight: 120,
    },
  ];
}
