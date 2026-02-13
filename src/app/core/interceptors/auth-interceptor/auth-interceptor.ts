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
    console.log(`Interceptor Logging: Request Made by: ${req.url}, AccessToken: ${accessToken}`)
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error("Catch error in the interceptor triggered!!!")
      console.error(error)
      const isTokenExpired =
        error.status === 401 &&
        error.error?.error === 'access_token_expired';

      if (isTokenExpired) {

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
            authService.logout();
            return throwError(() => refreshError);
          })
        );
      }

      return throwError(() => error);
    })
  );
};
