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
  /**
   * Write active tab text contents to clipboard.
   * @param clipboardService
   */
  constructor(private clipboardService: CopyToClipboardService) {}
  @ViewChild(TabsetComponent) public tabset: TabsetComponent;
  public testJson = testJson;

  /**
   * Write text to clipboard
   */
  public onCopyActiveTabData(): void {
    const activeTabData = this.getActiveTabData();
    this.clipboardService.writeToClipboard(activeTabData);
  }

  /**
   * Identify active tab and
   * @returns - active tab body text
   */
  private getActiveTabData(): string {
    const activeTab = this.tabset.tabs.filter((tab) => tab.active);
    return activeTab[0].elementRef.nativeElement.innerText;
  }
}
