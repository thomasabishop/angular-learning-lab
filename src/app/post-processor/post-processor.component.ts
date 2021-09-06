import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProjectProcessorsService} from './services/project-processors.service';
import {ProjectService} from './services/project.service';

@Component({
  selector: 'app-post-processor',
  templateUrl: './post-processor.component.html',
  styleUrls: ['./post-processor.component.less'],
})
export class PostProcessorComponent implements OnInit {
  public postProcessors: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private projectProcessors: ProjectProcessorsService,
    private projectService: ProjectService,
  ) {}

  /**
   * Retrieve project post processor settings and set initial form values with returned data.
   */

  public initialisePostProcessorValues(): void {
    if (this.projectService.projectInitialised) {
      this.postProcessors = this.formBuilder.group({
        enableAAnCorrection: this.projectProcessors.getPostProcessor('enableAAnCorrection')
          ? 'Yes'
          : 'No',
        enableAutoCapitalisation: this.projectProcessors.getPostProcessor(
          'enableAutoCapitalisation',
        )
          ? 'Yes'
          : 'No',
        enableWhitespaceCollapse: this.projectProcessors.getPostProcessor(
          'enableWhitespaceCollapse',
        )
          ? 'Yes'
          : 'No',
      });
    }
  }

  /**
   * Watch for UI updates to form values and update applications settings based on changed inputs.
   */
  public convertStringToBoolean(str: string): boolean {
    return str === 'Yes' ? true : false;
  }

  public updatePostProcessorValues(): void {
    this.postProcessors.valueChanges.subscribe((values) => {
      for (const rule in values) {
        if (values.hasOwnProperty(rule)) {
          this.projectProcessors.setPostProcessor(rule, this.convertStringToBoolean(values[rule]));
        }
      }
      console.group('Changed values recorded by Reactive Form observable');
      console.log(values);
      console.groupEnd();
      console.group('Changed values recorded by backend service:');
      console.log(this.projectProcessors.returnCurrentValues());
      console.groupEnd();
    });
  }

  public ngOnInit(): void {
    this.initialisePostProcessorValues();
    this.updatePostProcessorValues();
  }
}
