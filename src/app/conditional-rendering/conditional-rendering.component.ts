import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-conditional-rendering',
  templateUrl: './conditional-rendering.component.html',
  styleUrls: ['./conditional-rendering.component.less'],
})
export class ConditionalRenderingComponent implements OnInit {
  public buttonRenderText = 'Now you see me';

  public renderText = true;

  public languages = ['json', 'javascript', 'typescript', 'html'];
  public codeOne = `
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
  public codeTwo = `<!--cond-rend-block.component.html-->
  <ul *ngIf="dataToConditionallyRender">
   <li>{{ dataToConditionallyRender.fruit }}:</li>
    <ul>
     <li>{{ dataToConditionallyRender.weight }}g</li>
    </ul>
  </ul>`;

  public codeThree = `<!--conditional-rendering.component.html-->
  <app-cond-render-block *ngFor="let fruit of fruits" [dataToConditionallyRender]="fruit"> </app-cond-render-block>`;

  public codeFour = `<!--cond-rend-block.component.html-->
  <ul *ngIf="dataToConditionallyRender && dataToConditionallyRender.weight">
   <li>{{ dataToConditionallyRender.fruit }}:</li>
    <ul>
     <li>{{ dataToConditionallyRender.weight }}g</li>
    </ul>
  </ul>
    `;

  public fruits = [
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

  public onShowHideText(): void {
    this.renderText === true ? (this.renderText = false) : (this.renderText = true);
  }
  public ngOnInit(): void {}
}
