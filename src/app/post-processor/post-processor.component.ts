import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
//import {ProjectService} from './services/project.service';

@Component({
  selector: 'app-post-processor',
  templateUrl: './post-processor.component.html',
  styleUrls: ['./post-processor.component.less'],
})
export class PostProcessorComponent implements OnInit {
  public postProcessors: FormGroup;
  public ngOnInit(): void {
    this.postProcessors = new FormGroup({
      enableAAnCorrection: new FormControl('No'),
      enableAutoCapitalisation: new FormControl('No'),
      enableWhitespaceCollapse: new FormControl('Yes'),
    });
  }
}
