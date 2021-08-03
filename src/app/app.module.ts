import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {TabsModule} from 'ngx-bootstrap/tabs';
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
import {CopyPasteComponent} from './copy-paste/copy-paste.component';
import {ComponentDirectionalityComponent} from './component-directionality/component-directionality.component';
import {ChildToParentComponent} from './child-to-parent/child-to-parent.component';
import {FormsModule} from '@angular/forms';
import {CopyButtonComponent} from './copy-button/copy-button.component';
import {LearningTestingComponent} from './learning-testing/learning-testing.component';
import { TestingAServiceComponent } from './learning-testing/testing-a-service/testing-a-service.component';
import { ClassOnlyComponentTestComponent } from './learning-testing/class-only-component-test/class-only-component-test.component';
import { ClassOnlyDepsComponent } from './learning-testing/class-only-deps/class-only-deps.component';

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
    CopyPasteComponent,
    ComponentDirectionalityComponent,
    ChildToParentComponent,
    CopyButtonComponent,
    LearningTestingComponent,
    TestingAServiceComponent,
    ClassOnlyComponentTestComponent,
    ClassOnlyDepsComponent,
  ],
  imports: [
    BrowserModule,
    HighlightModule,
    HttpClientModule,
    FormsModule,
    TabsModule.forRoot(),
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
        path: 'copy-paste',
        component: CopyPasteComponent,
      },
      {
        path: 'component-directionality',
        component: ComponentDirectionalityComponent,
      },
      {
        path: 'learning-testing',
        component: LearningTestingComponent,
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
