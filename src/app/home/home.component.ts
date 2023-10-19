import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../interfaces/post';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from '@ngxs/store';
import { AuthState } from '../store/auth.state';
import { AuthUpdate } from '../store/model/auth.model';
import { FavUpdate } from '../store/model/fav.model';
import { Router } from '@angular/router';
import { FavState } from '../store/fav.state';
import { PopupComponent } from '../popup/popup.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubPopupComponent } from './sub-popup/sub-popup.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', "../../../node_modules/keen-slider/keen-slider.min.css"]
})
export class HomeComponent {

  constructor(
    private data: DataService,
    private cdr: ChangeDetectorRef,
    private title: Title,
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar,
    private meta: Meta
  ) { 
    this.meta.addTag({name: 'title', content: 'Foodie: Главная'})
    this.meta.addTag({name: 'description', content: 'Сборник кулинарных рецептов, для всей семьи'})
    this.title.setTitle("Foodie: Главная")
  }
  posts: Post[] = [];
  favoritePosts: Post[] = [];


  @ViewChild('sliderRef') sliderRef!: ElementRef;
  slider!: KeenSliderInstance;
  private dataLoaded = false;

  ngOnInit() {
    // title
    
    // posts
    this.data.getPosts().subscribe({
      next: data => {
        this.posts = data as Post[];
        this.favoritePosts = this.posts.filter(obj => obj.favorite === true);

        this.rndBestPosts = this.selectRandomObjects(6)
        this.rndTryPosts = this.selectRandomObjects(4)


        this.dataLoaded = true;
        this.cdr.detectChanges();
        if (this.dataLoaded && this.sliderRef) {
          this.initSlider();
        }
      }
    });
    // favorite
    this.store.select(FavState.getFavObject).subscribe({
      next: data => {
        this.favArr = data.favArr as number[]
      }
    })


  }

  closeBanner() {
    const bannerData = { hidden: true };
    localStorage.setItem('banner', JSON.stringify(bannerData));
    const bannerElement = document.querySelector('[appBottomBanner]') as HTMLElement;
    if (bannerElement !== null) {
      bannerElement.style.display = 'none';
    }
  }

  private initSlider() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,

    }, [
      (slider) => {
        let timeout: any;
        let mouseOver = false;
        slider.size = 1280
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]);
  }
  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }


  btnShowMore: Boolean = true;
  showCardsCount: number = 3;
  rndBestPosts: Post[] = [];
  showMore() {
    this.btnShowMore = false
    this.showCardsCount = 6
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

  rndTryPosts: Post[] = [];

  email: string = "";


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

  subscribe(){
    this.snackBar.openFromComponent(SubPopupComponent, {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: "top",
      panelClass: 'popup'
    });
    this.email = '';
  }


}
