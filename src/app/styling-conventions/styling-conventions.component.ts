import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-styling-conventions',
  templateUrl: './styling-conventions.component.html',
  styleUrls: ['./styling-conventions.component.less'],
})
export class StylingConventionsComponent implements OnInit {
  constructor() {}

  public darkRed = 'crimson';

  public codeOne = `const PEOPLE = [
  {
    name: 'Thomas',
    age: 32,
  },
  {
    name: 'Martha',
    age: 23,
  },
  {
    name: 'Mary Jo',
    age: 62,
  },
  ];
  `;

  public codeTwo = `applyMultipleStylesConditionally() {
    if (this.people.age < 30)
      return {
        color: 'blue',
        fontSize: '18px',
      };
  }
  // Note that we use camelCase for the style properties, not CSS kebab-case`;

  public codeThree = ` <p [ngStyle]="applyMultipleStylesConditionally()">{{ people.age }}</p>`;

  public codeFour = `applyConditionalClass() {
    return {
      oldest: this.people.age > 50,
    };
   }`;

  public codeFive = `applyConditionalClassAlternative() {
    return this.people.age > 50 && ['oldest'];
  }`;

  public ngOnInit(): void {}
}
