import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {AppComponent} from './app.component';
import {ClickEventsComponent} from './click-events/click-events.component';
import {StylingConventionsComponent} from './styling-conventions/styling-conventions.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {SplashComponent} from './splash/splash.component';
import {FooterComponent} from './footer/footer.component';
import {ForLoopComponent} from './for-loop/for-loop.component';
import {NamesAgesComponent} from './names-ages/names-ages.component';
import {ConditionalRenderingComponent} from './conditional-rendering/conditional-rendering.component';
import {InputLoopComponent} from './input-loop/input-loop.component';
import {CondRenderBlockComponent} from './cond-render-block/cond-render-block.component';
import {CounterComponent} from './counter/counter.component';
import {ApiCallComponent} from './api-call/api-call.component';
import {CopyPasteComponent} from './copy-paste/copy-paste.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickEventsComponent,
    StylingConventionsComponent,
    HeaderComponent,
    SplashComponent,
    FooterComponent,
    ForLoopComponent,
    NamesAgesComponent,
    ConditionalRenderingComponent,
    InputLoopComponent,
    CondRenderBlockComponent,
    CounterComponent,
    ApiCallComponent,
    CopyPasteComponent,
  ],
  imports: [
    BrowserModule,
    HighlightModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SplashComponent,
      },
      {
        path: 'click-events',
        component: ClickEventsComponent,
      },
      {
        path: 'styling-conventions',
        component: StylingConventionsComponent,
      },
      {
        path: 'data-iterate',
        component: ForLoopComponent,
      },
      {
        path: 'conditional-rendering',
        component: ConditionalRenderingComponent,
      },
      {
        path: 'working-with-apis',
        component: ApiCallComponent,
      },
      {
        path: 'copy-paste',
        component: CopyPasteComponent,
      },
    ]),
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
