import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { DataService } from 'src/app/data.service';
import { AuthState } from 'src/app/store/auth.state';
import { AdminDataService } from '../admin-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopupErrorComponent } from 'src/app/popup-error/popup-error.component';
import { SuccessUpdateComponent } from './success-update/success-update.component';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private adminData: AdminDataService,
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar,
    private title: Title,
  ) {
    this.title.setTitle("Foodie: Редактировать рецепт")
   }

  id: any;
  recipe: any;

  recipeOldName: string = '';

  recipeName: string = '';
  recipeDesc: string = '';
  recipeCat: string = '';
  recipeTime!: number;
  recipeFirstIng: string = '';
  recipeProtein!: number;
  recipeFats!: number;
  recipeCarb!: number;
  recipeCals!: number;
  recipeFirstAction: string = '';
  recipeFirstActionFull: string = '';

  authToken: string = ''

  response: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.getPost(this.id).subscribe({
      next: data => {
        this.recipe = data
        console.log(this.recipe)
        this.recipeOldName = this.recipe.title
        this.recipeName = this.recipe.title
        this.recipeDesc = this.recipe.body
        this.recipeCat = this.recipe.tags
        this.recipeTime = this.recipe.timeCooking
        this.recipeFirstIng = this.recipe.additionalInformation.ingredients[0]
        this.recipeProtein = this.recipe.foodValue.belki
        this.recipeFats = this.recipe.foodValue.fats
        this.recipeCarb = this.recipe.foodValue.carbohydrates
        this.recipeCals = this.recipe.foodValue.calories
        this.recipeFirstAction = this.recipe.additionalInformation.details[0].title
        this.recipeFirstActionFull = this.recipe.additionalInformation.details[0].body
      }
    })

    this.store.select(AuthState.getAuthToken).subscribe({
      next: (data: string) => {
        this.authToken = data
      }
    })
  }

  updateRecipe() {
    console.log('updateRecipe')
    const body = {
      "title": this.recipeName,
      "body": this.recipeDesc,
      "tags": this.recipeCat,
      "image": 'this.recipeImg.name',
      "favorite": true,
      "timeCooking": this.recipeTime,
      "foodValue": {
        "calories": this.recipeCals,
        "fats": this.recipeFats,
        "carbohydrates": this.recipeCarb,
        "belki": this.recipeProtein
      },
      "additionalInformation": {
        "ingredients": [
          this.recipeFirstIng,
        ],
        "details": [
          {
            "title": this.recipeFirstAction,
            "body": this.recipeFirstActionFull
          }
        ]
      }
    }
    this.adminData.updateRecipe(this.id, body, this.authToken).subscribe({
      next: data => {
        console.log(data)
        this.response = data
        if (this.response.updated) {

          console.log('update successfull')
          this.snackBar.openFromComponent(SuccessUpdateComponent, {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: "top",
            panelClass: 'popup'
          });
          this.router.navigateByUrl('admin/recipes')
        }
      },
      error: error => {
        console.log(error)
        this.snackBar.openFromComponent(PopupErrorComponent, {
          duration: 5000,
          horizontalPosition: 'end',
          verticalPosition: "top",
          panelClass: 'popup'
        });
      }
    })

  }

}
