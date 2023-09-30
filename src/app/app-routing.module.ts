import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveComponent } from './resolve/resolve.component';
import { fetchingResolver } from './fetching.resolver';

const routes: Routes = [
  {
    path: 'resolve',
    component: ResolveComponent,
    // resolve: [FetchingResolver]
    resolve: {
      routeResolver: fetchingResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
