import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';
import {AuthService} from '../../services/auth-service/auth-service';
import {API_ENDPOINTS} from '../../constants/api-endpoints';


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const AUTH_EXCLUDED_ROUTES = [
    API_ENDPOINTS.LOGIN,
    API_ENDPOINTS.SIGNUP,
    API_ENDPOINTS.REFRESH_TOKEN
  ];

  if (AUTH_EXCLUDED_ROUTES.some(url => req.url === url)) {
    return next(req);
  }

  const accessToken = authService.getAccessToken();
  let authReq = req;

  if (accessToken) {
    console.log(`Interceptor Logging: Request Made by: ${req.url}, Token Attached.`)
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }

  return next(authReq).pipe(
    catchError((httpError: HttpErrorResponse) => {
     console.warn(`HttpError while performing HttpRequest: ${httpError}`);
      const isTokenExpired = httpError.status === 401 && httpError.error.code === 'token_not_valid';
      if (isTokenExpired) {
        console.warn(`Access Token Expired. Requesting new Token.`);
        return authService.refreshToken().pipe(
          switchMap((response: any) => {
            const newAccessToken = response.access;
            authService.setAccessToken(newAccessToken);
            const retryReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newAccessToken}`
              }
            });
            return next(retryReq);
          }),
          catchError(refreshError => {
            console.error(`Refresh Error: ${refreshError}`);
            console.warn("Performing logout...")
            authService.logout();
            return throwError(() => refreshError);
          })
        );
      }
      return throwError(() => httpError);
    })
  );
};
