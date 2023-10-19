import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRecipesComponent } from './admin-recipes/admin-recipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { AdminDataService } from './admin-data.service';
import { DeleteRecipeDialogComponent } from './admin-recipes/delete-recipe-dialog/delete-recipe-dialog.component';
import { DeletePopupComponent } from './admin-recipes/delete-recipe-dialog/delete-popup/delete-popup.component';
import { FormsModule } from '@angular/forms';
import { SuccessUpdateComponent } from './edit-recipe/success-update/success-update.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminUsersComponent,
    AdminRecipesComponent,
    EditRecipeComponent,
    DeleteRecipeDialogComponent,
    DeletePopupComponent,
    SuccessUpdateComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule

  ],
  providers: [AdminDataService]
})
export class AdminModule { }
