import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(
    withInterceptors([])
  ), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding(),
    withRouterConfig({
      paramsInheritanceStrategy: `always`
    }))]
};
