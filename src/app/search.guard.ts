import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const searchGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.canViewResults.value == false) {
    router.navigate(['']);
    return false;
  }

  return authService.canViewResults.value;
};
