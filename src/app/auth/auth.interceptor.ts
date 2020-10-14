import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    console.log(token);
    if (token) {
      const clonedRequest = this.addToken(req, token);
      console.log(clonedRequest);
      return next.handle(clonedRequest);
    } else {
      return next.handle(req);
    }
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set('Authorization', 'Bearer '  + token)
    });
  }
}
