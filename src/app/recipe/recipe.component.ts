import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../interfaces/post';
import { Router } from '@angular/router';
import { FavUpdate } from '../store/model/fav.model';
import { FavState } from '../store/fav.state';
import { PopupComponent } from '../popup/popup.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(
    private data: DataService,
    private router: Router,
    private store: Store,
    private snackBar: MatSnackBar,
    private meta: Meta,
    private title: Title
  ) {
    this.meta.addTag({name: 'title', content: 'Foodie: Каталог рецептов'})
    this.meta.addTag({name: 'description', content: 'Все самые лучшие рецепты собраны здесь'})
    this.title.setTitle('Foodie: Каталог рецептов')
   }
  posts: Post[] = [];
  favArr: Number[] = [];

  ngOnInit(): void {
    this.data.getPosts().subscribe({
      next: data => {
        this.posts = data as Post[]
      }
    })

    this.store.select(FavState.getFavObject).subscribe({
      next: data => {
        this.favArr = data.favArr as number[]
      }
    })

  }

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
  cardClick(id: number) {
    this.router.navigateByUrl('recipe/' + id)
    console.log('card ' + id)
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
