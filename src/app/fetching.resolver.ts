// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
// import { DataService } from './data.service';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class FetchingResolver implements Resolve<object> {
//   constructor(private dataService: DataService) {}
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> {
//     return this.dataService.getResolve();
//   }
// }


import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { DataService } from './data.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const fetchingResolver: ResolveFn<object> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  dataService: DataService = inject(DataService)
): Observable<object> => {

  return dataService.getResolve();
};
