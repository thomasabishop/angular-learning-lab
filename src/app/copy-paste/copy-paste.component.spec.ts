import {TestBed} from '@angular/core/testing';
import {CopyPasteComponent} from './copy-paste.component';
import {CopyToClipboardService} from './copy-to-clipboard.service';

describe('CopyPasteComponent', () => {
  let component;
  let clipboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CopyPasteComponent,
        {
          provide: CopyToClipboardService,
        },
      ],
    });
    component = TestBed.inject(CopyPasteComponent);
    clipboardService = TestBed.inject(CopyToClipboardService);

    // Mock Tabset component so that @ViewChild `tabset` element is defined when test runs.
    // Otherwise we get 'Cannot read property 'tabs' of undefined'.

    component.tabset = {
      tabs: [
        {
          id: 'Mocked tab',
          heading: 'Mocked tab',
          elementRef: {},
          active: true,
        },
      ],
    } as any;
  });

  fit('calls ClipboardService `writeToClipboard` method on active tab', () => {
    spyOn(clipboardService, 'writeToClipboard');
    // Create some content for the mocked active tab:
    const tabMock = document.createElement('div');
    tabMock.innerText = 'Some inner text to be copied';
    // Set the active tab contents to the content defined above:
    component.tabset.tabs[0].elementRef.nativeElement = tabMock;
    // Call the component's copy method:
    component.onCopyActiveTabContents();
    // Expect the service to have been called with the class method
    expect(clipboardService.writeToClipboard).toHaveBeenCalled();
    // Expect the service to have been called with the element we defined above:
    expect(clipboardService.writeToClipboard).toHaveBeenCalledWith(tabMock);
  });
});
