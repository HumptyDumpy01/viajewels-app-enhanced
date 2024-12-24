import { HttpEventType, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs';

export function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  console.log(`[OUTGOING REQUEST]`, request);

  return next(request).pipe(
    tap({
      next: event => {
        if (event.type === HttpEventType.Response) {
          console.log(`[INCOMING RESPONSE]`, event.status, event.body);
        }
      }
    })
  );

}

