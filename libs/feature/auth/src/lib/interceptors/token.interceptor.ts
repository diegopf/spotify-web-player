import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headers = req.headers.set(
      'Authorization',
      `Bearer ${this.authService.token}`
    );

    if (req.url.indexOf('api.spotify.com') > -1) {
      const authReq = req.clone({
        headers,
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
