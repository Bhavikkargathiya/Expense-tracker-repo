import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = !!localStorage.getItem('token');
  console.log('AuthGuard executed. Authenticated:', isAuthenticated);

  if (!isAuthenticated) {
    console.log('User not authenticated. Redirecting to login...');
    router.navigate(['/login']);
    return false;
  }
  console.log('User authenticated. Access granted.');

  return true;
};
