import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthState } from '../store/auth.state';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopupErrorComponent } from '../popup-error/popup-error.component';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  constructor(
    private store: Store,
    private data: DataService,
    private router: Router,
    private snackBar: MatSnackBar,
    private title: Title,
  ) { 
    this.title.setTitle("Foodie: Создание рецепта")
  }
  ngOnInit(): void {
    this.store.select(AuthState.getAuthToken).subscribe({
      next: data => {
        this.authToken = data
      }
    })
  }

  authToken: string = ''

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

  recipeImg: any = null;

  response: any;

  createRecipe() {
    console.log('createRecipe')
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
    this.data.postRecipe(body, this.authToken).subscribe({
      next: data => {
        console.log(data)
        this.response = data
        if (this.response.id) {
          this.router.navigateByUrl('/')
        }
      },
      error: error => {
        console.log(error)
        this.openSnackBar()
      }
    })

  }

  @ViewChild('fileInput') fileInput!: ElementRef;

  handleFileClick() {
    this.fileInput.nativeElement.click();
  }

  // перетаскивание файла
  handleFilesDropped(files: FileList) {
    console.log(files);
    if (files[0].type === "image/jpeg" || files[0].type === "image/jpg" || files[0].type === "image/png" && (files[0].size < 10*1024*1024)) {
      this.recipeImg = files[0]
    }

  }
  // прямой выбор по кнопке
  handleFiles(event: any) {
    const files = event.target.files;
    console.log(files)
    if (files[0].size < 10*1024*1024) {
      this.recipeImg = files[0]
    }
  }

  deleteImage() {
    this.recipeImg = null
  }

  openSnackBar() {
    this.snackBar.openFromComponent(PopupErrorComponent, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: "top",
      panelClass: 'popup'
    });
  }
}
