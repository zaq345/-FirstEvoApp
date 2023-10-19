import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Err404Component } from './err404/err404.component';
import { Err401Component } from './err401/err401.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDefComponent } from './recipe-def/recipe-def.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { adminGuard } from './guards/admin.guard';
import { userGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipe',
    component: RecipeComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeDefComponent
  },
  {
    path: 'create-recipe',
    component: CreateRecipeComponent,
    canActivate: [userGuard]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    
  },
  {
    path: 'err401',
    component: Err401Component
  },
  {
    path: ':noMatch',
    redirectTo: 'err404'
  },
  {
    path: 'err404',
    component: Err404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
