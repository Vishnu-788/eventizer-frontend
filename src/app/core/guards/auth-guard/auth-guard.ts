import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/auth-service/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router);
  const accessToken = authService.getAccessToken()

  if(accessToken){
    return true
  }

  router.navigate(['/auth/login']);
  return false;
};
