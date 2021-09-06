import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectProcessorsService {
  private rules = {
    enableAAnCorrection: false,
    enableAutoCapitalisation: false,
    enableWhitespaceCollapse: false,
  };

  public getPostProcessor(postprocessor: string): boolean {
    return this.rules[postprocessor];
  }

  public setPostProcessor(postprocessor: string, status: boolean): void {
    this.rules[postprocessor] = status;
  }

  public returnCurrentValues(): string {
    return JSON.stringify(this.rules);
  }
}
