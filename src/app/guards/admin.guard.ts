import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '../store/auth.state';

export const adminGuard: CanActivateFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  router: Router = inject(Router),
  store: Store = inject(Store),
) => {
  let authObject: any;

  store.select(AuthState.getAuthObject).subscribe({
    next: data => {
      authObject = data
      if (authObject.role === 'admin') {
        return true
      } else {
        return router.navigateByUrl('/err401')
      }
    }
  })
  return true
};
