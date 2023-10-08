import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot } from '@angular/router';
import { DataService } from './data.service';
import { inject } from '@angular/core';

export const accessGuard: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  data: DataService = inject(DataService),
  router: Router = inject(Router)
) => {
  if (data.role === 'admin') {
    return true;
  } else {
    return router.navigateByUrl('/error');
  }

};
