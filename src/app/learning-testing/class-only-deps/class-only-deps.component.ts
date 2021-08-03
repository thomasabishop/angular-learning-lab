import {Component} from '@angular/core';
import {DateService} from './date.service';

@Component({
  selector: 'app-class-only-deps',
  templateUrl: './class-only-deps.component.html',
  styleUrls: ['./class-only-deps.component.less'],
})
export class ClassOnlyDepsComponent {
  constructor(private ds: DateService) {}
  public theDate = this.ds.formatDate(new Date());
}
