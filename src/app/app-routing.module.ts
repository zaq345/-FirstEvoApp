import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { EditComponent } from './posts/post/edit/edit.component';
import { accessGuard } from './access.guard';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {
        path: ':id',
        component: PostComponent,
        canActivateChild: [accessGuard],
        children: [
          {
            path: 'edit',
            component: EditComponent
          }
        ]
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
