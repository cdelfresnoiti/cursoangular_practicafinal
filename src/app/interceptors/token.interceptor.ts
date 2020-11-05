import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authToken = localStorage.getItem('token');
    const authReq = request.clone({
      url: `https://cliente.tuneupprocess.com/apiweb/v1/` + request.url,
      headers: request.headers.set('token', authToken)
    });

    console.log(authReq);

    return next.handle(authReq);
  }
}
