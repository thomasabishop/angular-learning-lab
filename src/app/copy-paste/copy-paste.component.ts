import {Component, OnInit} from '@angular/core';
import {TabDirective} from 'ngx-bootstrap/tabs';
import {CopyToClipboardService} from './copy-to-clipboard.service';
import {dummyJson} from './dummyJson';

@Component({
  selector: 'app-copy-paste',
  templateUrl: './copy-paste.component.html',
  styleUrls: ['./copy-paste.component.less'],
})
export class CopyPasteComponent implements OnInit {
  constructor(public clipboardService: CopyToClipboardService) {}
  public dummyJson = dummyJson;
  public value: any;
  public ngOnInit(): void {}

  public onSelect(data: TabDirective): void {
    const tabContents = data.elementRef.nativeElement.innerHTML;
    this.value = tabContents;
    console.log(this.value);
  }

  public copyTabContents(text: string): void {
    //   this.clipboardservice.writetoclipboard(document.queryselector('tab-pane.active'));
    console.log(text);
  }
}
