import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { ShareComponent } from './share/share.component';
import { Post } from '../interfaces/post';
import { Store } from '@ngxs/store';
import { FavUpdate } from '../store/model/fav.model';
import { FavState } from '../store/fav.state';
import { PopupComponent } from '../popup/popup.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: './recipe-def.component.html',
  styleUrls: ['./recipe-def.component.css']
})
export class RecipeDefComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    public dialog: MatDialog,
    private router: Router,
    private store: Store,
    private snackBar: MatSnackBar,
    private meta: Meta,
    private title: Title
  ) { }

  recipeId: string = '';
  recipe: any;
  posts: Post[] = [];
  othersPosts: Post[] = [];
  tryPosts: Post[] = [];

  ingredients: any;
  details: any;

  ngOnInit(): void {
    this.updateRecipeId();
    this.data.getPost(this.recipeId).subscribe({
      next: data => {
        this.recipe = data
        console.log(this.recipe)
        // ingredients
        this.ingredients = this.recipe.additionalInformation.ingredients.map((item: string) => {
          return { item: item, checked: false };
        });
        // details
        this.details = this.recipe.additionalInformation.details.map((item: any) => {
          return { title: item.title, body: item.body, checked: false };
        });

        this.meta.addTag({name: 'title', content: this.recipe.title})
        this.meta.addTag({name: 'description', content: this.recipe.body})
        this.title.setTitle(this.recipe.title)        

      },
      error: err => {
        console.log(err)
        this.router.navigateByUrl('/err404')
      }
    })



    this.data.getPosts().subscribe({
      next: data => {
        this.posts = data as Post[];
        this.othersPosts = this.selectRandomObjects(3)
        this.tryPosts = this.selectRandomObjects(4)
      }
    });
    // favorite
    this.store.select(FavState.getFavObject).subscribe({
      next: data => {
        this.favArr = data.favArr as number[]
      }
    })
  }

  private updateRecipeId() {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeId = id !== null ? id : '';
  }
  selectRandomObjects(count: number): any[] {
    const randomObjects: any[] = [];
    const arrayCopy = [...this.posts];

    while (randomObjects.length < count && arrayCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      const randomObject = arrayCopy[randomIndex];

      randomObjects.push(randomObject);
      arrayCopy.splice(randomIndex, 1);
    }

    return randomObjects;
  }

  print() {
    window.print();
  }

  share(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ShareComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  cardClick(id: number) {
    this.router.navigateByUrl('recipe/' + id).then(() => {
      const idRoute = this.route.snapshot.paramMap.get('id');
      this.recipeId = idRoute !== null ? idRoute : '';
      console.log(this.recipeId);

      this.data.getPost(this.recipeId).subscribe({
        next: data => {
          this.recipe = data
          // ingredients
          this.ingredients = this.recipe.additionalInformation.ingredients.map((item: string) => {
            return { item: item, checked: false };
          });
          // details
          this.details = this.recipe.additionalInformation.details.map((item: any) => {
            return { title: item.title, body: item.body, checked: false };
          });
          this.meta.addTag({name: 'title', content: this.recipe.title})
          this.meta.addTag({name: 'description', content: this.recipe.body})
          this.title.setTitle(this.recipe.title)   
        }
      })
      this.data.getPosts().subscribe({
        next: data => {
          this.posts = data as Post[];
          this.othersPosts = this.selectRandomObjects(3)
          this.tryPosts = this.selectRandomObjects(4)
          console.log(this.othersPosts)
        }
      });
      // favorite
      this.store.select(FavState.getFavObject).subscribe({
        next: data => {
          this.favArr = data.favArr as number[]
        }
      })
    });
  }

  favArr: Number[] = [];
  fav(id: number, event: MouseEvent) {

    event.stopPropagation()
    console.log('fav ' + id)

    if (!this.isFav(id)) {
      this.openSnackBar()
    }


    this.store.dispatch(new FavUpdate({
      favArr: [id]
    }))
  }

  isFav(id: number) {
    return this.favArr.includes(id);
  }

  openSnackBar() {
    this.snackBar.openFromComponent(PopupComponent, {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: "top",
      panelClass: 'popup'
    });
  }


}
