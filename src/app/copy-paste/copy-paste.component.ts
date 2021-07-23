import {Component, OnInit} from '@angular/core';
import {CopyToClipboardService} from './copy-to-clipboard.service';
import {dummyJson} from './dummyJson';

@Component({
  selector: 'app-copy-paste',
  templateUrl: './copy-paste.component.html',
  styleUrls: ['./copy-paste.component.less'],
})
export class CopyPasteComponent implements OnInit {
  constructor(public clipboard: CopyToClipboardService) {}
  public dummyJson = dummyJson;
  public ngOnInit(): void {}

  public copy(text: string): void {
    this.clipboard.copyToClipboard(text);
  }
}
