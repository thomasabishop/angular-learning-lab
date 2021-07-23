import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CopyToClipboardService {
  private copyToClipboardFallback(targetText: string): void {
    const copyHandler = (event: ClipboardEvent) => {
      event.preventDefault();
      event.clipboardData!.setData('text/plain', targetText);
    };
    document.addEventListener('copy', copyHandler);
    document.execCommand('copy');
  }

  // private copyRichtextToClipboard(targetText: string): void {
  //   const richtextBlob = new Blob([targetText], {type: 'text/html'});
  //   const copiedRichtext = new ClipboardItem({'text/html': richtextBlob});
  //   navigator.clipboard.write([copiedRichtext])
  // }

  public copyToClipboard(targetText: string): void {
    if (!navigator.clipboard) {
      this.copyToClipboardFallback(targetText);
    } else {
      navigator.clipboard.writeText(targetText);
    }
  }
}
