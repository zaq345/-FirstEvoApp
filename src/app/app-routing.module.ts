import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'book',
  },
  {
    path: 'book',
    component: BookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
