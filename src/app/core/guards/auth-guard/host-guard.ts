import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/auth-service/auth-service';

export const hostGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router);

  if(authService.isHost()){
    return true
  }
  router.navigate(['/auth/login']);
  return false;
};
