import {Component, ElementRef, ViewChild} from '@angular/core';
import {NamesAgesComponent} from '../names-ages/names-ages.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.less'],
})
export class ViewChildComponent {
  @ViewChild('username') public username: ElementRef;
  @ViewChild(NamesAgesComponent) public componentRef: ElementRef;
  public onShowViewChildValue(): void {
    console.group('View Angular template variable:');
    console.log(this.username.nativeElement.value);
    console.groupEnd();

    console.group('View Angular component');
    console.log(this.componentRef);
    console.groupEnd();
  }
}
