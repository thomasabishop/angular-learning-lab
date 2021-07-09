import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ClickEventsComponent} from './click-events/click-events.component';
import {StylingConventionsComponent} from './styling-conventions/styling-conventions.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {SplashComponent} from './splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickEventsComponent,
    StylingConventionsComponent,
    HeaderComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
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
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
