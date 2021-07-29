import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CopyToClipboardService {
  /**
   * Writes string to clipboard
   * @remarks
   * The modern Clipboard API method is preferred but fallback is provided.
   * @param targetText  - The string to be written
   */

  public writeToClipboard(targetText: string): void {
    if (!navigator.clipboard) {
      this.writeToClipboardFallback(targetText);
    } else {
      navigator.clipboard.writeText(targetText);
    }
  }

  private writeToClipboardFallback(targetText: string): void {
    const copyHandler = (event: ClipboardEvent) => {
      event.preventDefault();
      event.clipboardData!.setData('text/plain', targetText);
    };
    document.addEventListener('copy', copyHandler);
    document.execCommand('copy');
  }
}
