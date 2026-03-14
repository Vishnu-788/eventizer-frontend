import {ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from './core/interceptors/auth-interceptor/auth-interceptor';
import {SessionRestoreService} from './core/services/session/session-restore-service';
import { provideMarkdown } from 'ngx-markdown'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([authInterceptor]),
    ),
    provideRouter(routes),
    provideAppInitializer(()=> {
      const session = inject(SessionRestoreService)
      return session.restoreSession()
    }),
    provideMarkdown()
  ]
};
