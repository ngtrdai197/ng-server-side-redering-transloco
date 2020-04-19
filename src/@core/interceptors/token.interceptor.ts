import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { TranslocoService } from '@ngneat/transloco'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private readonly translocoService: TranslocoService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        language: this.translocoService.getActiveLang(),
      },
    })
    return next.handle(request)
  }
}
