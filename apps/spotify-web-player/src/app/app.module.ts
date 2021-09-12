import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService, TokenInterceptor } from '@spotify-web-player/auth';
import { ThemeSwitchModule } from '@spotify-web-player/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appInitProviderFactory } from './core/initializers/appInitProvider.factory';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeSwitchModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitProviderFactory,
      deps: [AuthService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
