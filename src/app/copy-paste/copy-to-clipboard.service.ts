import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CopyToClipboardService {
  private writeToClipboardFallback(targetText: string): void {
    const copyHandler = (event: ClipboardEvent) => {
      event.preventDefault();
      event.clipboardData!.setData('text/plain', targetText);
    };
    document.addEventListener('copy', copyHandler);
    document.execCommand('copy');
  }

  public writeToClipboard(targetText: string): void {
    if (!navigator.clipboard) {
      this.writeToClipboardFallback(targetText);
    } else {
      navigator.clipboard.writeText(targetText);
    }
  }
}
