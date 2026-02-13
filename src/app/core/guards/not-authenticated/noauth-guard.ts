import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../../services/auth-service/auth-service';
import {inject} from '@angular/core';

export const noauthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  if(authService.isAuthenticated()){
    if(authService.isHost()){
      router.navigate(['/host'])
    }
    else if(authService.isAdmin()){
      router.navigate(['/admin'])
    }else {
      router.navigate(['/'])
    }
    return false
  }
  return true
};
