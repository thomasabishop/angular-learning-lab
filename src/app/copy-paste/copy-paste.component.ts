import {Component, OnInit} from '@angular/core';
import {dummyJson} from './dummyJson';

@Component({
  selector: 'app-copy-paste',
  templateUrl: './copy-paste.component.html',
  styleUrls: ['./copy-paste.component.less'],
})
export class CopyPasteComponent implements OnInit {
  public dummyJson = dummyJson;
  public ngOnInit(): void {}
}
