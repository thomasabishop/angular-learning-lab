import {Component, Input, OnInit} from '@angular/core';
import {CopyToClipboardService} from '../copy-paste/copy-to-clipboard.service';

@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.less'],
})
export class CopyButtonComponent implements OnInit {
  constructor(public clipboardService: CopyToClipboardService) {}
  @Input() public data: string;

  public onCopyReceivedData(receivedData: string): void {
    this.clipboardService.writeToClipboard(receivedData);
  }
  public ngOnInit(): void {}
}
