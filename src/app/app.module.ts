import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { SharedModule } from '@shared/shared.module'
import { AppComponent } from './app.component'
import { routes } from './routes'
import { CoreModule } from '@core/core.module'
import { TokenInterceptor } from '@core/interceptors/token.interceptor'
import { environment as env } from '@env/environment'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: env.APP_ID }),
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
