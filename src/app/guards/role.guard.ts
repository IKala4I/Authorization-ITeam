import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {RoleService} from 'src/app/services/role.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const roleService = inject(RoleService);
  const router = inject(Router);

  const requiredRole = route.data.requiredRole as string;

  if (roleService.hasRole(requiredRole))
    return true;
  else {
    router.navigate(['/unauthorized']);
    return false;
  }
};
