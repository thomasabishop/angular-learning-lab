import {CopyToClipboardService} from './copy-to-clipboard.service';

describe('CopyToClipboardService', () => {
  let service: CopyToClipboardService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(CopyToClipboardService);
    service = new CopyToClipboardService();
    spyOn(document, 'addEventListener').and.callThrough();
    spyOn(document, 'execCommand').and.callThrough();
    spyOn(document, 'removeEventListener').and.callThrough();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should copy `innerText` from element to clipboard', () => {
    const fakeElement = document.createElement('div');
    fakeElement.innerText = 'Fake element inner text';
    service.writeToClipboard(fakeElement);
    expect(document.addEventListener).toHaveBeenCalledWith('copy', jasmine.any(Function));
    expect(document.execCommand).toHaveBeenCalledWith('copy');
    expect(document.removeEventListener).toHaveBeenCalledWith('copy', jasmine.any(Function));
  });

  it('it should copy `innerHTML` from element to clipboard', () => {
    const fakeElement = document.createElement('div');
    fakeElement.innerHTML = `<p>Fake element inner HTML</p>`;
    service.writeToClipboard(fakeElement);
    expect(document.addEventListener).toHaveBeenCalledWith('copy', jasmine.any(Function));
    expect(document.execCommand).toHaveBeenCalledWith('copy');
    expect(document.removeEventListener).toHaveBeenCalledWith('copy', jasmine.any(Function));
  });
});
