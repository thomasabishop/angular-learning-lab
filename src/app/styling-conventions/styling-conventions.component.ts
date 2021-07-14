import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-styling-conventions',
  templateUrl: './styling-conventions.component.html',
  styleUrls: ['./styling-conventions.component.less'],
})
export class StylingConventionsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  darkRed = 'crimson';
  languages = ['json', 'typescript', 'html'];
  codeOne = `const PEOPLE = [
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

  codeTwo = `applyMultipleStylesConditionally() {
    if (this.people.age < 30)
      return {
        color: 'blue',
        fontSize: '18px',
      };
  }
  // Note that we use camelCase for the style properties, not CSS kebab-case`;

  codeThree = ` <p [ngStyle]="applyMultipleStylesConditionally()">{{ people.age }}</p>`;

  codeFour = `applyConditionalClass() {
    return {
      oldest: this.people.age > 50,
    };
   }`;

  codeFive = `applyConditionalClassAlternative() {
    return this.people.age > 50 && ['oldest'];
  }`;
}
