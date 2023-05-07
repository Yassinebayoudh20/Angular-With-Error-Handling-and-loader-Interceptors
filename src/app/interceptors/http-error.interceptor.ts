import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'An error occurred';
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `Error: ${error.message}`;
          } else if (error.status === 404) {
            errorMessage = error.error.Message;
          } else if (error.status === 401) {
            errorMessage = error.error.Message;
          } else if (error.status === 400) {
            errorMessage = error.error.Message;
          }
          // Return an observable with a user-facing error message.
          alert(errorMessage)
          return throwError(() => new Error(errorMessage));
        })
      );
  }
}

