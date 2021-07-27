import {Component, OnInit} from '@angular/core';
import {programmingLangsPopularity} from './input-loop.data';
@Component({
  selector: 'app-component-directionality',
  templateUrl: './component-directionality.component.html',
  styleUrls: ['./component-directionality.component.less'],
})
export class ComponentDirectionalityComponent implements OnInit {
  constructor() {}

  public progLangs = programmingLangsPopularity;

  public bidirectionalInterface = `
   export interface IProgrammingLanguage {
      language: string;
      usagePercent: number;
    }    
  `;

  public groceryItems = ['bananas', 'spinach'];

  public updateGroceryList(item: string): void {
    this.groceryItems.push(item);
  }
  ngOnInit(): void {}
}
