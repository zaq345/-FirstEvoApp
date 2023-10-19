import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../admin-data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteRecipeDialogComponent } from './delete-recipe-dialog/delete-recipe-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeletePopupComponent } from './delete-recipe-dialog/delete-popup/delete-popup.component';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './admin-recipes.component.html',
  styleUrls: ['./admin-recipes.component.css']
})
export class AdminRecipesComponent implements OnInit {
  constructor(
    private adminData: AdminDataService,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private title: Title,
  ) { 
    this.title.setTitle("Foodie: Управление рецептами")
  }

  recipes: any;

  ngOnInit(): void {
    this.adminData.getRecipes().subscribe({
      next: data => {
        this.recipes = data
        console.log(this.recipes)
      }
    })
  }

  editRecipe(id: number) {
    this.router.navigateByUrl('/admin/recipes/' + id)
  }

  deleteRecipe(id: number) {
    this.deleteDialogOpen('500', '500', id)
  }

  deleteDialogOpen(enterAnimationDuration: string, exitAnimationDuration: string, id: number): void {
    const dialogRef = this.dialog.open(DeleteRecipeDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.recipes = this.recipes.filter((recipe: { id: number }) => recipe.id !== result);
        // console.log('deleted ' + result);
        this.snackBar.openFromComponent(DeletePopupComponent, {
          duration: 5000,
          horizontalPosition: 'end',
          verticalPosition: "top",
        });        
      }
    });


  }

}
