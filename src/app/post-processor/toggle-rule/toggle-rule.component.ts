import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toggle-rule',
  templateUrl: './toggle-rule.component.html',
})
export class ToggleRuleComponent {
  @Input() public ruleName: string;
}
