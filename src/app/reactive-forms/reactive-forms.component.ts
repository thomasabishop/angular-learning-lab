import {Component, OnInit} from '@angular/core';

import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less'],
})
export class ReactiveFormsComponent implements OnInit {
  public loginForm: FormGroup;
  public formValues = '{}';
  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.initialiseForm();
  }

  // Set the form up with an object containing 'controllers' corresponding to each value the form will collect
  public initialiseForm(): void {
    this.loginForm = this.formBuilder.group({
      email: 'Enter email',
      password: 'Enter password',
      checkout: true,
    });
  }

  // Output values as string in template
  public onSubmit(): string {
    return (this.formValues = JSON.stringify(this.loginForm.value));
  }
}
