import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CopyToClipboardService {
  /**
   * Writes string to clipboard
   * @remarks
   * @param targetElement  - The element to be written
   */

  public writeToClipboard(targetElement: HTMLElement): void {
    const copyHandler = (event: ClipboardEvent) => {
      event.preventDefault();
      // Allow for cross-pasting in different user editor contexts: rich-text, plaintext
      event.clipboardData!.setData('text/plain', targetElement.innerText);
      event.clipboardData!.setData('text/html', targetElement.innerHTML);
    };
    document.addEventListener('copy', copyHandler);
    document.execCommand('copy');
    document.removeEventListener('copy', copyHandler);
  }
}
