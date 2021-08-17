/**
 * Write active tab text contents to clipboard.
 * @param clipboardService
 */

import {Component, ViewChild} from '@angular/core';
import {TabsetComponent} from 'ngx-bootstrap/tabs';
import {CopyToClipboardService} from './copy-to-clipboard.service';
import {testJson} from './dummyJson';

@Component({
  selector: 'app-copy-paste',
  templateUrl: './copy-paste.component.html',
  styleUrls: ['./copy-paste.component.less'],
})
export class CopyPasteComponent {
  constructor(private clipboardService: CopyToClipboardService) {}
  @ViewChild(TabsetComponent) public tabset: TabsetComponent;
  public testJson = testJson;

  public onCopyActiveTabContents(): void {
    const activeTab = this.tabset.tabs.filter((tab) => tab.active)[0].elementRef.nativeElement;
    this.clipboardService.writeToClipboard(activeTab);
  }
}
