import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/auth-service/auth-service';

export const verifiedHostGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  if(authService.isVerified()){
    return true;
  }
  router.navigate(['verify']);
  return false;
};
